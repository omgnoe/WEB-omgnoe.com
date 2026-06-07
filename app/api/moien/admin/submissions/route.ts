import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/moien-auth";
import { listSubmissions } from "@/lib/moien-store";
import { MOIEN_UNITS, MOIEN_TOTAL_ITEMS } from "@/lib/moien-words";

export const runtime = "nodejs";

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const subs = await listSubmissions();

  const contributors = new Set(subs.map((s) => s.contributor));
  // distinct (unit, item) coverage
  const covered = new Set(subs.map((s) => `${s.unitId}#${s.itemIndex}`));

  const perUnit = MOIEN_UNITS.map((u) => {
    const us = subs.filter((s) => s.unitId === u.id);
    const coveredItems = new Set(us.map((s) => s.itemIndex)).size;
    return {
      id: u.id,
      titleLb: u.titleLb,
      totalItems: u.items.length,
      recordings: us.length,
      coveredItems,
    };
  });

  return NextResponse.json({
    stats: {
      totalRecordings: subs.length,
      contributors: contributors.size,
      coveredItems: covered.size,
      totalItems: MOIEN_TOTAL_ITEMS,
    },
    perUnit,
    submissions: subs,
  });
}
