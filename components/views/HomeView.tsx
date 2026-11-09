import Image from "next/image";
import Link from "next/link";
import type { SimpleIcon } from "simple-icons";
import {
  siTypescript,
  siNextdotjs,
  siReact,
  siSwift,
  siFlutter,
  siNestjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siRedis,
  siStripe,
  siDocker,
  siTailwindcss,
  siHetzner,
  siAnthropic,
} from "simple-icons";
import AutoScrollRow from "@/components/AutoScrollRow";
import ContactForm from "@/components/ContactForm";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import Reveal from "@/components/Reveal";
import SearchProof from "@/components/SearchProof";
import ServiceIcon from "@/components/ServiceIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StatusRail from "@/components/StatusRail";
import StoryRanking from "@/components/StoryRanking";
import SystemIndex from "@/components/SystemIndex";
import { trustedBy } from "@/lib/creative";
import { getAllWork, stack } from "@/lib/projects";
import { getServices } from "@/lib/services";
import { heroPlate, heroPlateMobile } from "@/lib/hero";
import { getChapters, getPressGroups } from "@/lib/story";
import {
  aboutPath,
  contactPath,
  servicePath,
  servicesPath,
  workAnchor,
  type Locale,
} from "@/lib/i18n";
import { dict } from "@/lib/ui";

const ICONS: Record<string, SimpleIcon> = {
  siTypescript,
  siNextdotjs,
  siReact,
  siSwift,
  siFlutter,
  siNestjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siRedis,
  siStripe,
  siDocker,
  siTailwindcss,
  siHetzner,
  siAnthropic,
};

/** Section label plus the rule that runs to the edge. Used by every section. */
function SectionHead({ label }: { label: string }) {
  return (
    <div className="sec-head">
      <span className="mono text-ember">{label}</span>
    </div>
  );
}

export default function HomeView({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const services = getServices(locale);
  const allWork = getAllWork(locale);

  // The Sensor Tower placement lives in the story data; the homepage borrows the
  // chapter's ranking rather than keeping a second copy that can drift.
  const ranking = getChapters(locale).find((c) => c.ranking)?.ranking;
  // Group two is the written press. Group one is photo credits, which belong on
  // /about rather than on a page that is selling software.
  const press = getPressGroups(locale)[1];

  return (
    <>
      <StatusRail locale={locale} />
      <SiteHeader locale={locale} pageKey={{ kind: "home" }} />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="powered guides relative overflow-hidden">
          {/* The plate is an enhancement layer, never a dependency: with no file
              in public/hero the gradient alone carries the section. */}
          {heroPlate && (
            <div className="absolute inset-0 z-0" aria-hidden>
              {/* Phone: the tall plate runs full bleed, scrimmed from the top
                  because that is where the headline sits. */}
              {heroPlateMobile && (
                <div className="absolute inset-0 sm:hidden">
                  <Image
                    src={heroPlateMobile}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-void via-void/70 to-void/85" />
                </div>
              )}

              {/* Desktop: a panel on the right rather than a full bleed. The
                  headline runs to about two thirds of the viewport at this
                  size, so anything behind it loses: a full-bleed portrait put
                  his face directly under the type and the scrim then had to
                  erase him to keep the words legible. Given its own column he
                  stays fully visible and the type stays fully readable. */}
              <div className="absolute inset-y-0 right-0 hidden w-[54%] sm:block xl:w-[50%]">
                <Image
                  src={heroPlate}
                  alt=""
                  fill
                  priority
                  sizes="50vw"
                  className="object-cover object-[58%_center]"
                />
                {/* Fade the inner edge into the page so there is no seam. */}
                <div className="absolute inset-0 bg-gradient-to-r from-void from-15% via-void/45 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/70" />
              </div>
            </div>
          )}

          <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-8">
            <div className={`pb-12 sm:max-w-[56%] ${heroPlate ? "pt-14 lg:pt-20 lg:pb-20" : "pt-12 lg:pt-16 lg:pb-16"}`}>
              <p className="mono text-dim">{t.op.heroEyebrow}</p>

              <h1 className="font-display d-hero mt-7 max-w-[18ch] text-balance">
                <span className="block">{t.op.heroLine1}</span>{" "}
                <span className="block">
                  {t.op.heroLine2.split(" ")[0]}{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">
                      {t.op.heroLine2.split(" ").slice(1).join(" ")}
                    </span>
                    <span
                      className="absolute inset-x-0 bottom-[0.08em] z-0 h-[0.11em] bg-ember"
                      aria-hidden
                    />
                  </span>
                </span>
              </h1>

              <p className="lead mt-7 max-w-xl text-dim">{t.op.heroLead}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href={contactPath(locale)} className="btn btn-ember">
                  {t.op.ctaPrimary} <span aria-hidden>→</span>
                </Link>
                <Link href={workAnchor(locale)} className="btn btn-wire">
                  {t.op.ctaSecondary}
                </Link>
              </div>

              <dl className="rule-t mt-10 grid max-w-2xl grid-cols-3 pt-7">
                {t.op.heroStats.map((s) => (
                  <div key={s.l}>
                    <dt className="sr-only">{s.l}</dt>
                    <dd>
                      <span className="font-display tnum block text-[clamp(1.75rem,3.4vw,2.75rem)]">
                        {s.n}
                      </span>
                      <span className="mono mt-2 block max-w-[11rem] text-faint">{s.l}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Ticker: the whole offer in one band, at reading speed. */}
          <div className="rule-t rule-b relative z-10 overflow-hidden bg-ember py-3">
            <div className="ticker" aria-hidden>
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center">
                  {t.op.ticker.map((w) => (
                    <span
                      key={`${copy}-${w}`}
                      className="mono flex items-center gap-6 px-6 text-ink"
                    >
                      {w}
                      <span className="opacity-80">/</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <p className="sr-only">{t.op.ticker.join(", ")}</p>
          </div>
        </section>

        {/* ── WORKED WITH ──────────────────────────────────────────────── */}
        <section className="rule-t overflow-hidden py-14">
          <Reveal>
            <p className="mono px-4 text-center text-faint sm:px-8">{t.home.trusted}</p>
            <AutoScrollRow className="mt-9 items-stretch">
              {[0, 1].map((n) => (
                <div key={n} className="flex shrink-0 items-stretch" aria-hidden={n === 1}>
                  {trustedBy.map((tb) => (
                    <span
                      key={`${n}-${tb.name}`}
                      title={tb.name}
                      className="flex h-16 w-44 shrink-0 items-center justify-center border-r border-line px-7 sm:w-52"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tb.src}
                        alt={`${tb.name} logo`}
                        loading="lazy"
                        style={{ maxHeight: tb.h }}
                        className={`client-logo w-auto max-w-full ${
                          tb.src.endsWith(".svg") ? "client-logo-svg" : ""
                        }`}
                      />
                    </span>
                  ))}
                </div>
              ))}
            </AutoScrollRow>
            <p className="mono mt-9 px-4 text-center text-faint sm:px-8">{t.home.trustedMore}</p>
          </Reveal>
        </section>

        {/* ── 01 SYSTEMS ───────────────────────────────────────────────── */}
        <section id="work" className="py-20 sm:py-28">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
            <Reveal>
              <SectionHead label={t.op.systemsLabel} />
              <h2 className="font-display d-xl mt-8 max-w-3xl text-balance">{t.op.systemsH2}</h2>
              <p className="lead mt-6 max-w-2xl text-dim">{t.op.systemsLead}</p>
            </Reveal>
            <div className="mt-12">
              <SystemIndex items={allWork} locale={locale} />
            </div>
          </div>
        </section>

        {/* ── 02 MEASURED: the Search Console proof ────────────────────── */}
        <SearchProof locale={locale} />

        {/* ── 03 TRACK RECORD ──────────────────────────────────────────── */}
        <section className="rule-t py-20 sm:py-28">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
            <Reveal>
              <SectionHead label={t.op.storyLabel} />
            </Reveal>

            <div className="mt-8 grid gap-14 lg:grid-cols-[1.15fr_1fr]">
              <Reveal>
                <h2 className="font-display d-xl max-w-2xl text-balance">{t.op.storyH2}</h2>
                <div className="mt-7 max-w-xl space-y-5 text-dim">
                  {t.op.storyBody.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <Link
                  href={aboutPath(locale)}
                  className="link-arrow mono mt-9 inline-flex text-chalk transition-colors hover:text-ember"
                >
                  {t.op.storyCta} <span aria-hidden>→</span>
                </Link>
              </Reveal>

              <Reveal delay={100}>
                {ranking && <StoryRanking ranking={ranking} />}

                {press && (
                  <div className="mt-10">
                    <p className="mono text-faint">{t.op.pressLabel}</p>
                    <ul className="mt-4">
                      {press.items.map((p) => (
                        <li key={p.outlet + p.date} className="rule-soft-b py-3">
                          {p.href ? (
                            <a
                              href={p.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-baseline justify-between gap-4"
                            >
                              <span className="mono-flat font-mono text-sm text-dim transition-colors group-hover:text-chalk">
                                {p.outlet}
                              </span>
                              <span className="mono shrink-0 text-faint">{p.date}</span>
                            </a>
                          ) : (
                            <div className="flex items-baseline justify-between gap-4">
                              <span className="mono-flat font-mono text-sm text-dim">
                                {p.outlet}
                              </span>
                              <span className="mono shrink-0 text-faint">{p.date}</span>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 04 CAPABILITIES ──────────────────────────────────────────── */}
        <section id="services" className="rule-t py-20 sm:py-28">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
            <Reveal>
              <SectionHead label={t.op.capLabel} />
              <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <h2 className="font-display d-xl max-w-2xl text-balance">{t.op.capH2}</h2>
                  <p className="lead mt-6 max-w-2xl text-dim">{t.op.capLead}</p>
                </div>
                <Link href={servicesPath(locale)} className="btn btn-wire">
                  {t.common.allServices}
                </Link>
              </div>
            </Reveal>

            <div className="rule-t mt-12">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={i * 40}>
                  <Link
                    href={servicePath(locale, s.slug)}
                    className="sysrow group grid-cols-[2.5rem_1fr] px-1 md:grid-cols-[3.5rem_1.05fr_1.5fr_2.5rem]"
                  >
                    <span className="mono tnum self-start pt-1 text-faint md:self-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex min-w-0 items-center gap-4">
                      <ServiceIcon name={s.icon} className="h-5 w-5 shrink-0 text-ember" />
                      <span className="font-display d-md min-w-0 text-balance">{s.name}</span>
                    </span>
                    <span className="col-start-2 text-sm leading-relaxed text-dim md:col-start-3">
                      {s.short}
                    </span>
                    <span
                      className="mono hidden text-right text-faint transition-colors group-hover:text-ember md:block"
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 HOW IT RUNS + STACK ───────────────────────────────────── */}
        <section className="rule-t py-20 sm:py-28">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
            <Reveal>
              <SectionHead label={t.op.howLabel} />
              <h2 className="font-display d-xl mt-8 max-w-3xl text-balance">{t.op.howH2}</h2>
            </Reveal>

            <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-4">
              {t.op.howSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 70}>
                  <li className="flex h-full flex-col bg-void p-7">
                    <span className="mono tnum text-ember">{s.n}</span>
                    <h3 className="font-display d-md mt-5">{s.t}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-dim">{s.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>

            {/* The stack, as a flat strip of marks rather than a feature grid. */}
            <Reveal>
              <div className="rule-t mt-16 flex flex-wrap items-center gap-x-8 gap-y-5 pt-10">
                <span className="mono text-faint">{t.home.stackH2}</span>
                {stack.map((tool) => {
                  const icon = ICONS[tool.slug];
                  return (
                    <span
                      key={tool.name}
                      title={tool.name}
                      className="flex items-center gap-2.5 text-dim transition-colors hover:text-chalk"
                    >
                      {icon && (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 shrink-0"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d={icon.path} />
                        </svg>
                      )}
                      <span className="mono-flat font-mono text-xs">{tool.name}</span>
                    </span>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 06 CONTACT: the one light surface on the whole site ──────── */}
        <section id="contact" className="rule-t bg-paper text-ink">
          <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-8 sm:py-28">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
              <div>
                <div className="sec-head">
                  <span className="mono text-rust">{t.op.contactLabel}</span>
                </div>
                <h2 className="font-display d-xl mt-8 max-w-xl text-balance">{t.op.contactH2}</h2>
                <p className="lead mt-6 max-w-md opacity-75">{t.op.contactLead}</p>

                <ObfuscatedEmail className="mono-flat mt-10 inline-block font-mono text-base underline decoration-ember decoration-2 underline-offset-[6px]" />

                <dl className="mt-10 space-y-px">
                  {t.op.howSteps.slice(0, 2).map((s) => (
                    <div
                      key={s.n}
                      className="flex gap-5 border-t border-ink/12 py-4 last:border-b"
                    >
                      <dt className="mono tnum shrink-0 pt-0.5 text-rust">{s.n}</dt>
                      <dd className="text-sm leading-relaxed opacity-75">{s.d}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <ContactForm locale={locale} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
