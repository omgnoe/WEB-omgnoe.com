import { NextRequest, NextResponse } from "next/server";
import { saveSubmission, extForMime } from "@/lib/moien-store";
import { MOIEN_UNITS } from "@/lib/moien-words";

export const runtime = "nodejs";

const MAX_BYTES = 15 * 1024 * 1024; // 15 MB

export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "invalid form" }, { status: 400 });
  }

  const file = form.get("audio");
  const unitId = String(form.get("unitId") || "");
  const itemIndex = Number(form.get("itemIndex"));
  const text = String(form.get("text") || "").trim();
  const contributor = String(form.get("contributor") || "Anonym").trim().slice(0, 60) || "Anonym";

  if (!(file instanceof Blob)) {
    return NextResponse.json({ error: "no audio" }, { status: 400 });
  }
  if (file.size === 0 || file.size > MAX_BYTES) {
    return NextResponse.json({ error: "audio size out of range" }, { status: 400 });
  }
  const unit = MOIEN_UNITS.find((u) => u.id === unitId);
  if (!unit) {
    return NextResponse.json({ error: "unknown unit" }, { status: 400 });
  }
  if (!Number.isInteger(itemIndex) || itemIndex < 0 || itemIndex >= unit.items.length) {
    return NextResponse.json({ error: "bad itemIndex" }, { status: 400 });
  }
  // Trust the manifest text over client-supplied text.
  const canonicalText = unit.items[itemIndex];
  const mime = file.type || "application/octet-stream";

  const buf = Buffer.from(await file.arrayBuffer());

  const saved = await saveSubmission(
    {
      unitId: unit.id,
      unitTitle: unit.titleLb,
      itemIndex,
      text: canonicalText || text,
      lang: "lb",
      contributor,
      ext: extForMime(mime),
      mime,
    },
    buf
  );

  return NextResponse.json({ ok: true, id: saved.id });
}
