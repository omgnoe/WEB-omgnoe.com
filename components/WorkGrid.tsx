"use client";

import { useMemo, useState } from "react";
import WorkCard from "@/components/WorkCard";
import type { WorkItem } from "@/lib/projects";

type Filter = "all" | "personal" | "client";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "Everything" },
  { key: "personal", label: "Own products" },
  { key: "client", label: "Client work" },
];

export default function WorkGrid({
  items,
  showTagFilter = true,
}: {
  items: WorkItem[];
  showTagFilter?: boolean;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const i of items) for (const t of i.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
    return [...counts.entries()]
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([t]) => t);
  }, [items]);

  const visible = items.filter(
    (i) => (filter === "all" || i.kind === filter) && (!tag || i.tags.includes(tag))
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-full border border-line bg-card p-1 shadow-card">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f.key ? "bg-ink text-white" : "text-muted hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {showTagFilter && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTag(tag === t ? null : t)}
                className={`pill transition-colors ${
                  tag === t
                    ? "!border-transparent !bg-accent !text-white"
                    : "hover:border-line-strong"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((i) => (
          <WorkCard key={i.slug} item={i} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-muted">Nothing matches this combination yet.</p>
      )}
    </div>
  );
}
