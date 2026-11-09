import type { Ranking } from "@/lib/story";

/**
 * A third-party chart placement, rendered as an instrument readout.
 * The ember row is the only coloured line, because it is the only one that
 * is the point.
 */
export default function StoryRanking({ ranking }: { ranking: Ranking }) {
  return (
    <figure className="panel overflow-hidden">
      <figcaption className="bezel-bar flex-col items-start gap-1">
        <p className="font-display text-sm">{ranking.label}</p>
        <p className="mono text-faint">{ranking.note}</p>
      </figcaption>

      <ol>
        {ranking.entries.map((e) => (
          <li
            key={e.name}
            className={`flex items-center gap-4 border-b border-line-soft px-4 py-3 last:border-b-0 ${
              e.mine ? "bg-ember/10" : ""
            }`}
          >
            <span className={`mono tnum ${e.mine ? "text-ember" : "text-faint"}`}>
              {String(e.pos).padStart(2, "0")}
            </span>
            <span className={`text-sm ${e.mine ? "font-semibold text-ember" : "text-dim"}`}>
              {e.name}
            </span>
            {e.mine && <span className="mono ml-auto text-ember">Mine</span>}
          </li>
        ))}
      </ol>

      <div className="border-t border-line px-4 py-3">
        <a
          href={ranking.source}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow mono text-faint transition-colors hover:text-chalk"
        >
          Source: {ranking.sourceLabel}
          <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" aria-hidden>
            <path
              d="M6 3h7v7M13 3 4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </figure>
  );
}
