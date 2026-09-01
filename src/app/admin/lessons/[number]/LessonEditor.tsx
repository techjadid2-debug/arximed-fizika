"use client";

import { Plus, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";

import {
  addQuestion,
  addTask,
  deleteQuestion,
  deleteTask,
  saveLessonDetails,
  saveQuestion,
  saveTask,
  type ActionResult,
} from "@/lib/admin/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { VideoPlayer } from "@/components/learn/VideoPlayer";
import { cn } from "@/lib/utils";
import type { Lesson } from "@/types/lesson";

/** Saqlash natijasini ko‘rsatuvchi kichik satr. */
function Status({ result }: { result: ActionResult | null }) {
  if (!result) return null;
  return (
    <p
      className={cn(
        "text-sm",
        result.ok ? "text-muted-foreground" : "text-destructive",
      )}
    >
      {result.ok ? "✓ " : "→ "}
      {result.message}
    </p>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="mt-5 border border-border">
      <CardContent className="p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
        <div className="mt-5">{children}</div>
      </CardContent>
    </Card>
  );
}

export function LessonEditor({ lesson, courseSlug }: { lesson: Lesson; courseSlug: string }) {
  const [videoUrl, setVideoUrl] = useState(lesson.videoUrl ?? "");
  const [detailsResult, setDetailsResult] = useState<ActionResult | null>(null);
  const [pending, startTransition] = useTransition();

  return (
    <div className="pb-16">
      {/* ── Dars va video ─────────────────────────────────────────────── */}
      <Section title="Dars va video">
        <form
          action={(form) =>
            startTransition(async () => {
              setDetailsResult(await saveLessonDetails(lesson.id, courseSlug, lesson.number, form));
            })
          }
          className="space-y-5"
        >
          <div>
            <Label htmlFor="title">Sarlavha</Label>
            <Input id="title" name="title" defaultValue={lesson.title} className="mt-2 min-h-11" />
          </div>

          <div>
            <Label htmlFor="intro">Kirish matni</Label>
            <Textarea id="intro" name="intro" defaultValue={lesson.intro} className="mt-2" rows={2} />
          </div>

          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_140px]">
            <div>
              <Label htmlFor="videoUrl">YouTube havolasi</Label>
              <Input
                id="videoUrl"
                name="videoUrl"
                value={videoUrl}
                onChange={(event) => setVideoUrl(event.target.value)}
                placeholder="https://youtu.be/XXXXXXXXXXX"
                className="mt-2 min-h-11 font-mono text-sm"
              />
            </div>
            <div>
              <Label htmlFor="videoDurationMin">Davomiylik (daq)</Label>
              <Input
                id="videoDurationMin"
                name="videoDurationMin"
                inputMode="numeric"
                defaultValue={lesson.videoDurationMin ?? ""}
                className="mt-2 min-h-11"
              />
            </div>
          </div>

          {/* Jonli ko‘rinish — havola to‘g‘riligini darhol tekshiradi */}
          <div>
            <p className="mb-2 text-xs text-muted-foreground">Ko‘rinishi:</p>
            <VideoPlayer
              url={videoUrl}
              title={lesson.title}
              emptyLabel="Havola qo‘yilmagan yoki tanilmadi"
            />
          </div>

          <div className="border-t border-border pt-5">
            <Label htmlFor="homeworkTitle">Uyga vazifa sarlavhasi</Label>
            <Input
              id="homeworkTitle"
              name="homeworkTitle"
              defaultValue={lesson.homework.title}
              className="mt-2 min-h-11"
            />
            <Label htmlFor="homeworkBody" className="mt-4 block">
              Uyga vazifa matni
            </Label>
            <Textarea
              id="homeworkBody"
              name="homeworkBody"
              defaultValue={lesson.homework.body}
              className="mt-2"
              rows={2}
            />
            <Label htmlFor="homeworkPdfUrl" className="mt-4 block">
              PDF havolasi
            </Label>
            <Input
              id="homeworkPdfUrl"
              name="homeworkPdfUrl"
              defaultValue={lesson.homework.pdfUrl ?? ""}
              placeholder="/materials/ilk-qadam/01-uyga-vazifa.pdf"
              className="mt-2 min-h-11 font-mono text-sm"
            />
          </div>

          <label className="flex min-h-11 items-center gap-3 border-t border-border pt-5 text-sm">
            <input
              type="checkbox"
              name="isPublished"
              defaultChecked={lesson.isPublished}
              className="size-4 accent-foreground"
            />
            Chop etilgan (o‘quvchilarga ko‘rinadi)
          </label>

          <div className="flex items-center gap-4">
            <Button type="submit" disabled={pending} className="min-h-11 rounded-md">
              {pending ? "Saqlanmoqda…" : "Saqlash"}
            </Button>
            <Status result={detailsResult} />
          </div>
        </form>
      </Section>

      {/* ── Quiz ──────────────────────────────────────────────────────── */}
      <Section title={`Quiz · ${lesson.quiz.length} savol`}>
        <div className="space-y-4">
          {lesson.quiz.map((question, index) => (
            <QuestionForm
              key={question.id}
              index={index}
              question={question}
              courseSlug={courseSlug}
              number={lesson.number}
            />
          ))}
        </div>
        <form
          action={() =>
            startTransition(async () => {
              await addQuestion(lesson.id, courseSlug, lesson.number);
            })
          }
          className="mt-4"
        >
          <Button type="submit" variant="outline" disabled={pending} className="min-h-11 rounded-md">
            <Plus />
            Savol qo‘shish
          </Button>
        </form>
      </Section>

      {/* ── Mashqlar ──────────────────────────────────────────────────── */}
      <Section title={`Tekshiriladigan mashqlar · ${lesson.practice.length}`}>
        <div className="space-y-4">
          {lesson.practice.map((task, index) => (
            <TaskForm
              key={task.id}
              index={index}
              task={task}
              courseSlug={courseSlug}
              number={lesson.number}
            />
          ))}
        </div>
        <form
          action={() =>
            startTransition(async () => {
              await addTask(lesson.id, courseSlug, lesson.number);
            })
          }
          className="mt-4"
        >
          <Button type="submit" variant="outline" disabled={pending} className="min-h-11 rounded-md">
            <Plus />
            Mashq qo‘shish
          </Button>
        </form>
      </Section>
    </div>
  );
}

function QuestionForm({
  index,
  question,
  courseSlug,
  number,
}: {
  index: number;
  question: Lesson["quiz"][number];
  courseSlug: string;
  number: string;
}) {
  const [result, setResult] = useState<ActionResult | null>(null);
  const [pending, startTransition] = useTransition();
  const correct = question.options.find((option) => option.isCorrect);

  return (
    <div className="rounded-lg border border-border bg-muted/30 p-4">
      <form
        action={(form) =>
          startTransition(async () => {
            setResult(await saveQuestion(question.id, courseSlug, number, form));
          })
        }
        className="space-y-3"
      >
        <div className="flex items-start gap-3">
          <span className="mt-3 w-6 shrink-0 font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Input
            name="question"
            defaultValue={question.question}
            aria-label="Savol matni"
            className="min-h-11"
          />
        </div>

        <div className="space-y-2 pl-9">
          {question.options.map((option) => (
            <label key={option.id} className="flex min-h-11 items-center gap-3">
              <input
                type="radio"
                name="correct"
                value={option.id}
                defaultChecked={option.id === correct?.id}
                className="size-4 shrink-0 accent-foreground"
                aria-label="To‘g‘ri variant"
              />
              <Input
                name={`label-${option.id}`}
                defaultValue={option.label}
                aria-label="Variant matni"
                className="min-h-11"
              />
            </label>
          ))}
        </div>

        <div className="pl-9">
          <Textarea
            name="explanation"
            defaultValue={question.explanation}
            placeholder="Izoh — javobdan keyin ko‘rsatiladi"
            rows={2}
          />
        </div>

        <div className="flex items-center gap-4 pl-9">
          <Button type="submit" size="sm" disabled={pending} className="min-h-10 rounded-md">
            Saqlash
          </Button>
          <Status result={result} />
        </div>
      </form>

      <form
        action={() =>
          startTransition(async () => {
            await deleteQuestion(question.id, courseSlug, number);
          })
        }
        className="mt-2 pl-9"
      >
        <Button
          type="submit"
          size="sm"
          variant="ghost"
          disabled={pending}
          className="min-h-10 rounded-md text-muted-foreground hover:text-destructive"
        >
          <Trash2 />
          O‘chirish
        </Button>
      </form>
    </div>
  );
}

function TaskForm({
  index,
  task,
  courseSlug,
  number,
}: {
  index: number;
  task: Lesson["practice"][number];
  courseSlug: string;
  number: string;
}) {
  const [result, setResult] = useState<ActionResult | null>(null);
  const [pending, startTransition] = useTransition();

  return (
    <div className="rounded-lg border border-border bg-muted/30 p-4">
      <form
        action={(form) =>
          startTransition(async () => {
            setResult(await saveTask(task.id, courseSlug, number, form));
          })
        }
        className="space-y-3"
      >
        <div className="flex items-start gap-3">
          <span className="mt-3 w-6 shrink-0 font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Input name="prompt" defaultValue={task.prompt} aria-label="Mashq matni" className="min-h-11" />
        </div>

        <div className="grid gap-3 pl-9 sm:grid-cols-3">
          <div>
            <Label htmlFor={`answer-${task.id}`} className="text-xs">
              Javob
            </Label>
            <Input
              id={`answer-${task.id}`}
              name="answer"
              defaultValue={String(task.answer)}
              inputMode="decimal"
              className="mt-1.5 min-h-11 font-mono"
            />
          </div>
          <div>
            <Label htmlFor={`unit-${task.id}`} className="text-xs">
              Birlik
            </Label>
            <Input
              id={`unit-${task.id}`}
              name="unit"
              defaultValue={task.unit}
              className="mt-1.5 min-h-11 font-mono"
            />
          </div>
          <div>
            <Label htmlFor={`tolerance-${task.id}`} className="text-xs">
              Xatolik chegarasi
            </Label>
            <Input
              id={`tolerance-${task.id}`}
              name="tolerance"
              defaultValue={String(task.tolerance)}
              inputMode="decimal"
              className="mt-1.5 min-h-11 font-mono"
            />
          </div>
        </div>

        <div className="grid gap-3 pl-9 sm:grid-cols-2">
          <Textarea name="hint" defaultValue={task.hint} placeholder="Yordam" rows={2} />
          <Textarea name="solution" defaultValue={task.solution} placeholder="Yechim" rows={2} />
        </div>

        <div className="flex items-center gap-4 pl-9">
          <Button type="submit" size="sm" disabled={pending} className="min-h-10 rounded-md">
            Saqlash
          </Button>
          <Status result={result} />
        </div>
      </form>

      <form
        action={() =>
          startTransition(async () => {
            await deleteTask(task.id, courseSlug, number);
          })
        }
        className="mt-2 pl-9"
      >
        <Button
          type="submit"
          size="sm"
          variant="ghost"
          disabled={pending}
          className="min-h-10 rounded-md text-muted-foreground hover:text-destructive"
        >
          <Trash2 />
          O‘chirish
        </Button>
      </form>
    </div>
  );
}
