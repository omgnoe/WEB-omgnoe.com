import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  SEARCH_WINDOW,
  SNAPSHOT_DATE,
  curvePeak,
  curveSpan,
  searchAggregate,
  searchCurves,
  searchGrowthPercent,
} from "@/lib/proof";
import { workItemPath, type Locale } from "@/lib/i18n";
import { dict } from "@/lib/ui";

/**
 * 384537 reads as noise, 384K reads as a number. Always truncates, never
 * rounds: a claim about your own results is the last place to round upwards.
 */
function compact(n: number, locale: Locale) {
  // Intl will not shorten thousands in German, so the suffix is done by hand.
  if (n >= 1000) {
    const k = n / 1000;
    const truncated = k < 100 ? Math.floor(k * 10) / 10 : Math.floor(k);
    const s = new Intl.NumberFormat(locale, {
      maximumFractionDigits: k < 100 ? 1 : 0,
    }).format(truncated);
    return `${s}K`;
  }
  return new Intl.NumberFormat(locale).format(n);
}

function full(n: number, locale: Locale) {
  return new Intl.NumberFormat(locale).format(n);
}

/**
 * The section the old site did not have and needed most: evidence that the
 * search work actually moves. Every figure is read out of Search Console
 * properties Noe owns, snapshotted in lib/proof.ts and dated on the page.
 */
export default function SearchProof({ locale }: { locale: Locale }) {
  const t = dict(locale);

  const stats = [
    { v: compact(searchAggregate.impressions, locale), l: t.op.statImpressions },
    { v: full(searchAggregate.clicks, locale), l: t.op.statClicks },
    { v: `+${searchGrowthPercent}%`, l: t.op.statGrowth, accent: true },
    { v: String(searchAggregate.domains), l: t.op.statDomains },
    { v: full(searchAggregate.queriesTop10, locale), l: t.op.statTop10 },
    { v: full(searchAggregate.queriesTop3, locale), l: t.op.statTop3 },
  ];

  return (
    <section id="search" className="rule-t py-20 sm:py-28">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
        <Reveal>
          <div className="sec-head">
            <span className="mono text-ember">{t.op.searchLabel}</span>
          </div>
          <h2 className="font-display d-xl mt-8 max-w-3xl text-balance">{t.op.searchH2}</h2>
          <p className="lead mt-6 max-w-2xl text-dim">{t.op.searchLead(SNAPSHOT_DATE)}</p>
        </Reveal>

        {/* Aggregate */}
        <Reveal>
          <dl className="rule-t mt-12 grid grid-cols-2 border-line md:grid-cols-3 xl:grid-cols-6">
            {stats.map((s) => (
              <div key={s.l} className="rule-b rule-l -ml-px px-5 py-7 first:ml-0">
                <dt className="mono text-faint">{s.l}</dt>
                <dd
                  className={`font-display tnum mt-3 text-[clamp(1.6rem,3vw,2.5rem)] ${
                    s.accent ? "text-ember" : "text-chalk"
                  }`}
                >
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mono mt-4 text-faint">
            {t.op.searchWindow(SEARCH_WINDOW.from, SEARCH_WINDOW.to)}
          </p>
        </Reveal>

        {/* Per domain curves */}
        <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-4">
          {searchCurves.map((c, ci) => {
            const span = curveSpan(c);
            const peak = curvePeak(c);
            return (
              <Reveal key={c.domain} delay={ci * 80}>
                <div className="flex h-full flex-col bg-void p-6">
                  <div>
                    <p className="mono-flat truncate font-mono text-sm text-chalk">{c.domain}</p>
                    <p className="font-display tnum mt-3 text-[clamp(1.4rem,2.2vw,2rem)] text-ember">
                      {full(span.last.impressions, locale)}
                    </p>
                    <p className="mono mt-1.5 text-faint">{t.op.curveLastMonth}</p>
                  </div>

                  {/* Bars. Height is the share of this domain's own peak month. */}
                  <div className="mt-6 flex h-24 items-end gap-1" aria-hidden>
                    {c.months.map((m, i) => {
                      const h = Math.max((m.impressions / peak) * 100, m.impressions > 0 ? 3 : 1);
                      return (
                        <div
                          key={m.m}
                          className={`flex-1 ${m.impressions > 0 ? "bar" : "bar bar-zero"}`}
                          style={{ height: `${h}%`, ["--bar-delay" as string]: `${i * 45}ms` }}
                        />
                      );
                    })}
                  </div>

                  <p className="sr-only">
                    {c.domain}: {c.months.map((m) => `${m.m} ${m.impressions}`).join(", ")}
                  </p>

                  <div className="mono tnum mt-3 flex justify-between text-faint">
                    <span>{c.months[0].m}</span>
                    <span>{c.months[c.months.length - 1].m}</span>
                  </div>

                  <dl className="mono mt-5 border-t border-line pt-4 text-faint">
                    <div className="flex justify-between gap-2">
                      <dt className="truncate">{t.op.curveFirstMonth}</dt>
                      <dd className="tnum text-dim">
                        {span.first ? full(span.first.impressions, locale) : "0"}
                      </dd>
                    </div>
                  </dl>

                  {c.work && (
                    <Link
                      href={workItemPath(locale, c.work)}
                      className="link-arrow mono mt-5 text-dim transition-colors hover:text-ember"
                    >
                      {t.op.openCase} <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-faint">{t.op.searchFootnote}</p>

        {/* GEO: the half nobody does yet */}
        <Reveal>
          <div className="rule-t mt-16 grid gap-10 pt-14 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h3 className="font-display d-lg max-w-md text-balance">{t.op.geoH3}</h3>
              <p className="mt-5 max-w-md text-dim">{t.op.geoBody}</p>
            </div>
            <ol className="space-y-px">
              {t.op.geoPoints.map((p, i) => (
                <li key={p} className="flex gap-5 border-t border-line py-5 last:border-b">
                  <span className="mono tnum shrink-0 pt-1 text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-dim">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
