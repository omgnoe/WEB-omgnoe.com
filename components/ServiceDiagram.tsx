import type { Diagram } from "@/lib/diagrams";

/**
 * Renders a mechanism diagram from data.
 *
 * Deliberately HTML and CSS rather than SVG: the labels are translated and of
 * wildly different lengths across three languages, and text in SVG neither
 * wraps nor reflows. Boxes on a grid do both, stay selectable and searchable,
 * and reflow to a vertical stack on a phone for free.
 *
 * The connectors are the only drawn part, and they are plain borders that flip
 * from horizontal to vertical with the layout.
 */
export default function ServiceDiagram({ diagram }: { diagram: Diagram }) {
  const { stages, caption, loopFrom, loopTo, loopLabel } = diagram;
  const hasLoop = typeof loopFrom === "number" && typeof loopTo === "number";

  return (
    <figure className="panel overflow-hidden">
      <div className="bezel-bar">
        <span className="mono text-dim">{caption}</span>
      </div>

      <div className="p-5 sm:p-7">
        <ol className="grid gap-4 md:auto-cols-fr md:grid-flow-col md:gap-0">
          {stages.map((stage, i) => (
            <li key={stage.title} className="relative md:px-3 md:first:pl-0 md:last:pr-0">
              {/* Connector into this stage. A chevron on desktop, a tick on mobile. */}
              {i > 0 && (
                <span
                  aria-hidden
                  className="absolute -top-2 left-3 h-2 w-px bg-line-strong md:left-0 md:top-1/2 md:h-px md:w-3"
                />
              )}

              <p className="mono flex items-center gap-2 text-faint">
                <span className="tnum text-ember">{String(i + 1).padStart(2, "0")}</span>
                {stage.title}
                {stage.gate && (
                  <span className="ml-auto border border-ember/50 px-1.5 py-0.5 text-[0.6rem] text-ember">
                    gate
                  </span>
                )}
              </p>

              <div className="mt-3 space-y-2">
                {stage.nodes.map((n) => (
                  <div
                    key={n.label}
                    className={`rounded-[3px] border px-3 py-2.5 ${
                      n.key
                        ? "border-ember/60 bg-ember/10"
                        : stage.gate
                          ? "border-line-strong bg-panel-2"
                          : "border-line bg-panel-2"
                    }`}
                  >
                    <p className={`text-sm leading-snug ${n.key ? "text-ember" : "text-chalk"}`}>
                      {n.label}
                    </p>
                    {n.note && <p className="mono mt-1.5 text-faint">{n.note}</p>}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>

        {hasLoop && loopLabel && (
          <p className="mono mt-5 flex items-center gap-2.5 border-t border-line pt-4 text-faint">
            <span aria-hidden className="text-ember">
              ↺
            </span>
            {loopLabel}
          </p>
        )}
      </div>
    </figure>
  );
}
