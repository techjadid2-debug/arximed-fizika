#!/usr/bin/env node
/**
 * Foydalanuvchini admin qiladi (yo'q bo'lsa yaratadi).
 *
 *   node scripts/make-admin.mjs ustoz@example.com
 *
 * Parol so'raladi — yangi foydalanuvchi uchun.
 */
import { readFile } from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { createClient } from "@supabase/supabase-js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

async function loadEnv() {
  try {
    const raw = await readFile(join(ROOT, ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (match && !process.env[match[1]]) {
        process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
      }
    }
  } catch {}
}

await loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const email = process.argv[2];

if (!url || !serviceKey) {
  console.error("Xato: NEXT_PUBLIC_SUPABASE_URL va SUPABASE_SERVICE_ROLE_KEY kerak.");
  process.exit(1);
}
if (!email) {
  console.error("Foydalanish: node scripts/make-admin.mjs <email>");
  process.exit(1);
}

const db = createClient(url, serviceKey, { auth: { persistSession: false } });

// Mavjud foydalanuvchini qidiramiz
const { data: list, error: listError } = await db.auth.admin.listUsers({ perPage: 1000 });
if (listError) {
  console.error("Foydalanuvchilar ro'yxati olinmadi:", listError.message);
  process.exit(1);
}

let user = list.users.find((u) => u.email?.toLowerCase() === email.toLowerCase());

if (!user) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const password = await rl.question(`«${email}» uchun yangi parol (kamida 8 belgi): `);
  rl.close();

  if (password.length < 8) {
    console.error("Parol juda qisqa.");
    process.exit(1);
  }

  const { data, error } = await db.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });
  if (error) {
    console.error("Foydalanuvchi yaratilmadi:", error.message);
    process.exit(1);
  }
  user = data.user;
  console.log("Foydalanuvchi yaratildi.");
}

const { error } = await db.from("admins").upsert({ user_id: user.id, email }, { onConflict: "user_id" });
if (error) {
  console.error("Admin ro'yxatiga qo'shilmadi:", error.message);
  process.exit(1);
}

console.log(`✓ ${email} endi admin.`);
console.log("  Kirish: /admin/login");
