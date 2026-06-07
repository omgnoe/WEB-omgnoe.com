import { NextRequest, NextResponse } from "next/server";
import { isAuthed } from "@/lib/moien-auth";
import { listSubmissions, readAudio, safeSlug } from "@/lib/moien-store";
import { createZip } from "@/lib/zip";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const unitFilter = req.nextUrl.searchParams.get("unit");

  let subs = await listSubmissions();
  if (unitFilter) subs = subs.filter((s) => s.unitId === unitFilter);

  if (subs.length === 0) {
    return NextResponse.json({ error: "keng Opnamen" }, { status: 404 });
  }

  const files: { name: string; data: Buffer; date?: Date }[] = [];
  // index manifest as CSV
  const csv = ["unit,unitTitle,itemIndex,text,contributor,createdAt,file"];

  for (const s of subs) {
    let buf: Buffer;
    try {
      buf = await readAudio(s);
    } catch {
      continue;
    }
    const idx = String(s.itemIndex + 1).padStart(3, "0");
    const fname = `${s.unitId}/${idx}_${safeSlug(s.text)}__${safeSlug(s.contributor, 24)}__${s.id}.${s.ext}`;
    files.push({ name: fname, data: buf, date: new Date(s.createdAt) });
    const esc = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
    csv.push([s.unitId, esc(s.unitTitle), idx, esc(s.text), esc(s.contributor), s.createdAt, esc(fname)].join(","));
  }

  files.push({ name: "_index.csv", data: Buffer.from(csv.join("\n"), "utf8") });

  const zip = createZip(files);
  const stamp = new Date().toISOString().slice(0, 10);
  const label = unitFilter ? `${unitFilter}` : "all";
  return new NextResponse(new Uint8Array(zip), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="moien-audio-${label}-${stamp}.zip"`,
      "Content-Length": String(zip.length),
    },
  });
}
