import type { Ranking } from "@/lib/story";

/** A third-party chart placement, rendered as a small leaderboard. */
export default function StoryRanking({ ranking }: { ranking: Ranking }) {
  return (
    <figure className="mt-7 overflow-hidden rounded-[1.4rem] border border-line bg-paper-deep/60">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line px-5 py-3.5">
        <p className="font-display text-sm font-bold leading-tight">{ranking.label}</p>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
          {ranking.note}
        </p>
      </figcaption>

      <ol className="divide-y divide-line">
        {ranking.entries.map((e) => (
          <li
            key={e.name}
            className={`flex items-center gap-4 px-5 py-3 ${
              e.mine ? "bg-accent-soft" : ""
            }`}
          >
            <span
              className={`font-mono text-xs tabular-nums ${
                e.mine ? "font-bold text-accent-deep" : "text-muted"
              }`}
            >
              {String(e.pos).padStart(2, "0")}
            </span>
            <span className={`text-sm ${e.mine ? "font-bold text-accent-deep" : ""}`}>
              {e.name}
            </span>
            {e.mine && (
              <span className="ml-auto font-mono text-[0.6rem] uppercase tracking-[0.16em] text-accent-deep">
                Mine
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="border-t border-line px-5 py-3">
        <a
          href={ranking.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
        >
          Source: {ranking.sourceLabel}
          <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" aria-hidden>
            <path d="M6 3h7v7M13 3 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </figure>
  );
}
