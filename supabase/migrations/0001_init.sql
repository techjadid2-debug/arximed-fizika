-- Physica (Arximed.uz) — dars tizimi
-- Tuzilma: kurs → chorak (module) → dars → (video, quiz, uyga vazifa)

-- ─── Kurslar ────────────────────────────────────────────────────────────────
create table if not exists public.courses (
  id          uuid primary key default gen_random_uuid(),
  slug        text not null unique,
  title       text not null,
  description text not null default '',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ─── Choraklar ──────────────────────────────────────────────────────────────
create table if not exists public.modules (
  id        uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  position  int  not null,
  title     text not null,
  unique (course_id, position)
);

-- ─── Darslar ────────────────────────────────────────────────────────────────
create table if not exists public.lessons (
  id                 uuid primary key default gen_random_uuid(),
  course_id          uuid not null references public.courses(id) on delete cascade,
  module_id          uuid references public.modules(id) on delete set null,
  -- Marshrutdagi raqam: '01', '02', …
  number             text not null,
  -- Kurs bo'yicha global tartib (1..78)
  position           int  not null,
  title              text not null,
  intro              text not null default '',
  -- YouTube havolasi (yashirin video ham bo'lishi mumkin)
  video_url          text,
  video_duration_min int,
  homework_title     text not null default '',
  homework_body      text not null default '',
  homework_pdf_url   text,
  is_published       boolean not null default false,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now(),
  unique (course_id, number),
  unique (course_id, position)
);

create index if not exists lessons_course_position_idx
  on public.lessons (course_id, position);

-- ─── Quiz ───────────────────────────────────────────────────────────────────
create table if not exists public.quiz_questions (
  id          uuid primary key default gen_random_uuid(),
  lesson_id   uuid not null references public.lessons(id) on delete cascade,
  position    int  not null,
  question    text not null,
  explanation text not null default '',
  unique (lesson_id, position)
);

create table if not exists public.quiz_options (
  id          uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.quiz_questions(id) on delete cascade,
  position    int  not null,
  label       text not null,
  is_correct  boolean not null default false,
  unique (question_id, position)
);

create index if not exists quiz_questions_lesson_idx on public.quiz_questions (lesson_id, position);
create index if not exists quiz_options_question_idx  on public.quiz_options (question_id, position);

-- Har savolda aynan bitta to'g'ri variant bo'lishi shart.
create or replace function public.assert_single_correct_option()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  target uuid := coalesce(new.question_id, old.question_id);
  correct_count int;
begin
  select count(*) into correct_count
  from public.quiz_options
  where question_id = target and is_correct;

  if correct_count > 1 then
    raise exception 'Savolda faqat bitta to''g''ri variant bo''lishi kerak (topildi: %)', correct_count;
  end if;
  return null;
end;
$$;

drop trigger if exists quiz_options_single_correct on public.quiz_options;
create constraint trigger quiz_options_single_correct
  after insert or update on public.quiz_options
  deferrable initially deferred
  for each row execute function public.assert_single_correct_option();

-- ─── Uyga vazifa mashqlari ──────────────────────────────────────────────────
create table if not exists public.practice_tasks (
  id        uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  position  int  not null,
  prompt    text not null,
  unit      text not null default '',
  answer    numeric not null,
  tolerance numeric not null default 0.01 check (tolerance > 0),
  hint      text not null default '',
  solution  text not null default '',
  unique (lesson_id, position)
);

create index if not exists practice_tasks_lesson_idx on public.practice_tasks (lesson_id, position);

-- ─── Adminlar ───────────────────────────────────────────────────────────────
create table if not exists public.admins (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  email      text not null,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- ─── updated_at avtomatik yangilanishi ──────────────────────────────────────
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists courses_touch on public.courses;
create trigger courses_touch before update on public.courses
  for each row execute function public.touch_updated_at();

drop trigger if exists lessons_touch on public.lessons;
create trigger lessons_touch before update on public.lessons
  for each row execute function public.touch_updated_at();

-- ─── RLS: hamma o'qiydi (faqat chop etilganini), admin yozadi ───────────────
alter table public.courses        enable row level security;
alter table public.modules        enable row level security;
alter table public.lessons        enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_options   enable row level security;
alter table public.practice_tasks enable row level security;
alter table public.admins         enable row level security;

-- Kurslar va choraklar — hammaga ochiq
drop policy if exists courses_read on public.courses;
create policy courses_read on public.courses for select using (true);

drop policy if exists modules_read on public.modules;
create policy modules_read on public.modules for select using (true);

-- Darslar: chop etilganlar hammaga, qolgani faqat adminga
drop policy if exists lessons_read on public.lessons;
create policy lessons_read on public.lessons for select
  using (is_published or public.is_admin());

-- Quiz va mashqlar: darsi ko'rinadigan bo'lsa ko'rinadi
drop policy if exists quiz_questions_read on public.quiz_questions;
create policy quiz_questions_read on public.quiz_questions for select
  using (exists (
    select 1 from public.lessons l
    where l.id = lesson_id and (l.is_published or public.is_admin())
  ));

drop policy if exists quiz_options_read on public.quiz_options;
create policy quiz_options_read on public.quiz_options for select
  using (exists (
    select 1 from public.quiz_questions q
    join public.lessons l on l.id = q.lesson_id
    where q.id = question_id and (l.is_published or public.is_admin())
  ));

drop policy if exists practice_tasks_read on public.practice_tasks;
create policy practice_tasks_read on public.practice_tasks for select
  using (exists (
    select 1 from public.lessons l
    where l.id = lesson_id and (l.is_published or public.is_admin())
  ));

-- Yozish: faqat admin
drop policy if exists courses_write on public.courses;
create policy courses_write on public.courses for all
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists modules_write on public.modules;
create policy modules_write on public.modules for all
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists lessons_write on public.lessons;
create policy lessons_write on public.lessons for all
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists quiz_questions_write on public.quiz_questions;
create policy quiz_questions_write on public.quiz_questions for all
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists quiz_options_write on public.quiz_options;
create policy quiz_options_write on public.quiz_options for all
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists practice_tasks_write on public.practice_tasks;
create policy practice_tasks_write on public.practice_tasks for all
  using (public.is_admin()) with check (public.is_admin());

-- Admin ro'yxatini faqat admin ko'radi; qo'shish/o'chirish service_role orqali
drop policy if exists admins_read on public.admins;
create policy admins_read on public.admins for select using (public.is_admin());
