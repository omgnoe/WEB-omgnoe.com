"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import type { WorkItem } from "@/lib/projects";
import { workItemPath, type Locale } from "@/lib/i18n";
import { dict } from "@/lib/ui";

type Filter = "all" | "personal" | "client";

/** Rows shown on a phone before the user asks for the rest. */
const MOBILE_LIMIT = 6;

/**
 * The work, as an index of running systems rather than a wall of cards.
 *
 * Every row is a link to its case study. On a pointer device the screenshot
 * follows the cursor; on touch it never mounts, so phones carry none of the
 * weight. The row itself stays entirely readable without the preview, which is
 * the only reason the preview is allowed to be decorative.
 */
export default function SystemIndex({
  items,
  locale,
  showTagFilter = true,
}: {
  items: WorkItem[];
  locale: Locale;
  showTagFilter?: boolean;
}) {
  const t = dict(locale);
  const [filter, setFilter] = useState<Filter>("all");
  const [tag, setTag] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [peek, setPeek] = useState<{ src: string; x: number; y: number } | null>(null);
  const fine = useRef<boolean | null>(null);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.grid.all },
    { key: "personal", label: t.grid.own },
    { key: "client", label: t.grid.client },
  ];

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const i of items) for (const x of i.tags) counts.set(x, (counts.get(x) ?? 0) + 1);
    return [...counts.entries()]
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([x]) => x);
  }, [items]);

  const visible = items.filter(
    (i) => (filter === "all" || i.kind === filter) && (!tag || i.tags.includes(tag)),
  );

  /** Resolved once: a coarse pointer never gets the follow-the-cursor preview. */
  const isFine = () => {
    if (fine.current === null) {
      fine.current =
        typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
    }
    return fine.current;
  };

  return (
    <div
      onMouseLeave={() => setPeek(null)}
      onPointerMove={(e) => {
        if (peek) setPeek((p) => (p ? { ...p, x: e.clientX, y: e.clientY } : p));
      }}
    >
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex items-center gap-4">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`mono border-b pb-1 transition-colors ${
                filter === f.key
                  ? "border-ember text-chalk"
                  : "border-transparent text-faint hover:text-dim"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {showTagFilter && (
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {tags.map((x) => (
              <button
                key={x}
                type="button"
                onClick={() => setTag(tag === x ? null : x)}
                className={`mono-flat font-mono text-xs transition-colors ${
                  tag === x ? "text-ember" : "text-faint hover:text-dim"
                }`}
              >
                {tag === x ? `[x] ${x}` : `[ ] ${x}`}
              </button>
            ))}
          </div>
        )}

        <span className="mono tnum ml-auto text-faint">{t.op.systemsLive(visible.length)}</span>
      </div>

      {/* Column header, desktop only: the index reads as a table, not a list. */}
      <div className="rule-t mt-6 hidden grid-cols-[3.5rem_1.1fr_1.4fr_7rem] items-center gap-4 py-2.5 lg:grid">
        <span className="mono text-faint">Idx</span>
        <span className="mono text-faint">{t.op.colSystem}</span>
        <span className="mono text-faint">{t.op.colWhat}</span>
        <span className="mono text-right text-faint">{t.op.colStatus}</span>
      </div>

      <div className="rule-t">
        {visible.map((i, idx) => {
          const host = i.url ? i.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : null;
          return (
            <Link
              key={i.slug}
              href={workItemPath(locale, i.slug)}
              aria-label={`${i.name}, ${t.op.openCase}`}
              onMouseEnter={(e) => {
                if (i.shot && isFine()) setPeek({ src: i.shot, x: e.clientX, y: e.clientY });
              }}
              onMouseLeave={() => setPeek(null)}
              className={`sysrow grid-cols-[2.5rem_1fr] px-1 lg:grid-cols-[3.5rem_1.1fr_1.4fr_7rem] ${
                idx >= MOBILE_LIMIT && !showAll ? "hidden lg:grid" : ""
              }`}
            >
              <span className="mono tnum self-start text-faint lg:self-center">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span className="font-display d-md block truncate">{i.name}</span>
                <span className="mono mt-1 block text-faint lg:hidden">{i.tagline}</span>
              </span>

              <span className="mono-flat hidden min-w-0 font-mono text-sm text-dim lg:block">
                <span className="block truncate">{i.tagline}</span>
                {host && <span className="mt-1 block truncate text-xs text-faint">{host}</span>}
              </span>

              <span className="col-start-2 flex items-center gap-3 lg:col-start-4 lg:justify-end">
                <span className="mono text-faint">
                  {i.kind === "personal" ? t.op.mine : t.op.client}
                </span>
                {i.url && (
                  <span className="mono flex items-center gap-1.5 text-dim">
                    <span className="dot dot-live" aria-hidden />
                    {t.op.statusLive}
                  </span>
                )}
              </span>
            </Link>
          );
        })}
      </div>

      {!showAll && visible.length > MOBILE_LIMIT && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="btn btn-wire mt-6 w-full lg:hidden"
        >
          {t.grid.showAll(visible.length)}
        </button>
      )}

      {visible.length === 0 && <p className="py-12 text-center text-dim">{t.grid.empty}</p>}

      {/* Cursor preview. Pointer-events none, so it never eats the row click. */}
      {peek && (
        <div className="peek peek-on hidden lg:block" style={{ left: peek.x, top: peek.y }} aria-hidden>
          <Image
            src={peek.src}
            alt=""
            width={640}
            height={400}
            className="h-auto w-full"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
