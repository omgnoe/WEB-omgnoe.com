import { NextResponse } from "next/server";
import { countsByItem } from "@/lib/moien-store";

export const runtime = "nodejs";

// Public: per-item recording counts so the recorder can show coverage
// and steer contributors toward words that still need recordings.
// Returns counts only — no contributor info.
export async function GET() {
  const counts = await countsByItem();
  return NextResponse.json(
    { counts },
    { headers: { "Cache-Control": "no-store" } }
  );
}
