import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export type Submission = {
  id: string;
  unitId: string;
  unitTitle: string;
  itemIndex: number;
  text: string;
  lang: "lb";
  contributor: string;
  ext: string;
  mime: string;
  bytes: number;
  createdAt: string; // ISO
};

function dataDir(): string {
  return process.env.MOIEN_DATA_DIR || path.join(process.cwd(), "moien-data");
}
function audioDir(): string {
  return path.join(dataDir(), "audio");
}
function metaDir(): string {
  return path.join(dataDir(), "meta");
}

async function ensureDirs() {
  await fs.mkdir(audioDir(), { recursive: true });
  await fs.mkdir(metaDir(), { recursive: true });
}

export function extForMime(mime: string): string {
  const m = (mime || "").toLowerCase();
  if (m.includes("webm")) return "webm";
  if (m.includes("ogg")) return "ogg";
  if (m.includes("mp4") || m.includes("m4a") || m.includes("aac")) return "m4a";
  if (m.includes("wav")) return "wav";
  if (m.includes("mpeg") || m.includes("mp3")) return "mp3";
  return "bin";
}

export function safeSlug(s: string, max = 40): string {
  const base = s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return (base || "item").slice(0, max);
}

export async function saveSubmission(
  meta: Omit<Submission, "id" | "createdAt" | "bytes">,
  audio: Buffer
): Promise<Submission> {
  await ensureDirs();
  const id = crypto.randomBytes(9).toString("hex");
  const full: Submission = {
    ...meta,
    id,
    bytes: audio.length,
    createdAt: new Date().toISOString(),
  };
  await fs.writeFile(path.join(audioDir(), `${id}.${full.ext}`), audio);
  await fs.writeFile(path.join(metaDir(), `${id}.json`), JSON.stringify(full, null, 2), "utf8");
  return full;
}

export async function listSubmissions(): Promise<Submission[]> {
  await ensureDirs();
  let files: string[] = [];
  try {
    files = (await fs.readdir(metaDir())).filter((f) => f.endsWith(".json"));
  } catch {
    return [];
  }
  const out: Submission[] = [];
  for (const f of files) {
    try {
      const raw = await fs.readFile(path.join(metaDir(), f), "utf8");
      out.push(JSON.parse(raw) as Submission);
    } catch {
      /* skip corrupt */
    }
  }
  out.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return out;
}

export async function getSubmission(id: string): Promise<Submission | null> {
  if (!/^[a-f0-9]{18}$/.test(id)) return null;
  try {
    const raw = await fs.readFile(path.join(metaDir(), `${id}.json`), "utf8");
    return JSON.parse(raw) as Submission;
  } catch {
    return null;
  }
}

export async function readAudio(sub: Submission): Promise<Buffer> {
  return fs.readFile(path.join(audioDir(), `${sub.id}.${sub.ext}`));
}
