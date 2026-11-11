import Image from "next/image";
import Link from "next/link";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import Glitch from "@/components/Glitch";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StoryRanking from "@/components/StoryRanking";
import StoryShots from "@/components/StoryShots";
import {
  getChapters,
  getCredentials,
  getEducation,
  getEras,
  getLanguages,
  getLessons,
  getPressGroups,
  getRoles,
  getSkillGroups,
  spellCountIn,
  storyChrome,
  storyProducts,
} from "@/lib/story";
import {
  contactPath,
  urlFor,
  workItemPath,
  workPath,
  HTML_LANG,
  SITE,
  type Locale,
} from "@/lib/i18n";
import { dict } from "@/lib/ui";
import { PERSON_ID, SAME_AS } from "@/lib/schema";

/** Section label plus a rule to the far edge. Same device as the homepage. */
function SectionHead({ label, right }: { label: string; right?: string }) {
  return (
    <div className="sec-head">
      <span className="mono text-ember">{label}</span>
      {right && <span className="mono tnum shrink-0 text-faint">{right}</span>}
    </div>
  );
}

export default function AboutView({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const c = storyChrome(locale);
  const chapters = getChapters(locale);
  const eras = getEras(locale);
  const lessons = getLessons(locale);
  const roles = getRoles(locale);
  const skillGroups = getSkillGroups(locale);
  const languages = getLanguages(locale);
  const education = getEducation(locale);
  const credentials = getCredentials(locale);
  const pressGroups = getPressGroups(locale);
  const url = urlFor(locale, { kind: "about" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url,
    inLanguage: HTML_LANG[locale],
    mainEntity: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Noe Nei",
      url: SITE,
      image: `${SITE}/me/noe-suit.jpg`,
      jobTitle: "Head Developer",
      birthDate: "2002-03-09",
      worksFor: { "@type": "Organization", name: "DSP Invest Sarl" },
      address: { "@type": "PostalAddress", addressCountry: "LU" },
      knowsLanguage: ["lb", "de", "en", "fr"],
      alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.org })),
      sameAs: [
        ...SAME_AS,
        ...pressGroups.flatMap((g) => g.items.map((a) => a.href).filter((h): h is string => !!h)),
      ].filter((v, i, a) => a.indexOf(v) === i),
      award: "1st Public's Prize, #OurLuxembourg, Ministere de l'economie, June 2018",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.common.home, item: urlFor(locale, { kind: "home" }) },
      { "@type": "ListItem", position: 2, name: t.nav.about, item: url },
    ],
  };

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <SiteHeader locale={locale} pageKey={{ kind: "about" }} pageLabel={t.nav.about} />

      {/* ── MASTHEAD ──────────────────────────────────────────────────── */}
      <section className="powered guides relative">
        <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-8">
          <div className="grid gap-12 pt-14 pb-16 lg:grid-cols-[1.5fr_0.6fr] lg:pt-20">
            <div>
              <p className="mono text-dim">{c.kicker}</p>
              <h1 className="font-display d-hero aberrate mt-7 max-w-[16ch] text-balance">
                <Glitch text={c.h1a} className="block" />
                <Glitch text={c.h1b} className="block text-ember" />
              </h1>
              <p className="lead mt-8 max-w-2xl text-dim">{c.lead}</p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-faint">{c.leadNote}</p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#cv" className="btn btn-ember">
                  {c.jumpCv} <span aria-hidden>↓</span>
                </a>
                <Link href={contactPath(locale)} className="btn btn-wire">
                  {c.workWithMe}
                </Link>
              </div>
            </div>

            <figure className="mx-auto w-full max-w-[15rem] lg:ml-auto lg:mr-0 lg:max-w-none">
              <div className="relative aspect-[4/5] border border-line">
                <Image
                  src="/me/noe-suit.jpg"
                  alt={c.portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 320px"
                  className="portrait object-cover"
                />
              </div>
            </figure>
          </div>

          {/* The file header: the checkable facts, flat and scannable. */}
          <dl className="rule-t grid grid-cols-2 border-line pb-14 md:grid-cols-4">
            {c.facts.map((f) => (
              <div key={f.k} className="rule-l -ml-px px-5 py-6 first:ml-0">
                <dt className="mono text-faint">{f.k}</dt>
                <dd className="mt-2.5 text-sm leading-snug text-chalk">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── THE MARKERS ───────────────────────────────────────────────── */}
      <section className="rule-t py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
          <Reveal>
            <SectionHead label={c.numbersKicker} />
            <h2 className="font-display d-lg mt-7 max-w-2xl text-balance">{c.numbersH2}</h2>
            <dl className="rule-t mt-10 grid grid-cols-2 border-line md:grid-cols-5">
              {c.numbers.map((n) => (
                <div key={n.l} className="rule-l rule-b -ml-px px-5 py-7 first:ml-0">
                  <dt className="sr-only">{n.l}</dt>
                  <dd>
                    <span className="font-display tnum block text-[clamp(1.9rem,3.6vw,3rem)] text-ember">
                      {n.n}
                    </span>
                    <span className="mono mt-3 block text-faint">{n.l}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── THE ARC: every chapter on one screen ──────────────────────── */}
      <section className="rule-t py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
          <Reveal>
            <SectionHead label={c.indexKicker} right={spellCountIn(locale, chapters.length)} />
            <h2 className="font-display d-lg mt-7 max-w-2xl text-balance">{c.indexH2}</h2>
          </Reveal>

          <div className="rule-t mt-10 grid gap-x-10 md:grid-cols-2">
            {chapters.map((ch, i) => (
              <a
                key={ch.id}
                href={`#${ch.id}`}
                className="sysrow group grid-cols-[2.5rem_1fr] px-1"
              >
                <span className="mono tnum self-start pt-1 text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="mono block text-faint">{ch.period}</span>
                  <span className="mt-1.5 block text-base text-dim transition-colors group-hover:text-chalk">
                    {ch.title}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CHAPTERS, in eras ─────────────────────────────────────── */}
      {eras.map((era, ei) => (
        <section key={era.id} className="rule-t">
          {/* Era band: a full-width marker so the arc has visible joints. */}
          <div className="rule-b bg-panel">
            <div className="mx-auto flex max-w-[90rem] items-baseline gap-5 px-4 py-6 sm:px-8">
              <span className="mono tnum text-ember">{c.eras[ei]?.label}</span>
              <h2 className="font-display d-md">{c.eras[ei]?.title}</h2>
            </div>
          </div>

          <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
            {era.chapters.map(({ chapter: ch, n }) => {
              // The one chapter marked `tone: dark` in the data is the low
              // point. The whole page is dark now, so it gets the ember spine
              // instead of an inverted card.
              const pivot = ch.tone === "dark";
              return (
                <article
                  key={ch.id}
                  id={ch.id}
                  className="rule-soft-b grid scroll-mt-24 gap-x-10 gap-y-5 py-12 lg:grid-cols-[10rem_minmax(0,46rem)_1fr] lg:py-16"
                >
                  {/* Rail */}
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <p className="mono tnum text-ember">{String(n).padStart(2, "0")}</p>
                    <p className="mono mt-2 text-faint">{ch.period}</p>
                  </div>

                  {/* Reading column */}
                  <div className={pivot ? "border-l-2 border-ember pl-6" : ""}>
                    <h3 className="font-display d-lg max-w-[20ch] text-balance">{ch.title}</h3>

                    <div className="mt-6 space-y-5 text-dim">
                      {ch.body.map((para) => (
                        <p key={para.slice(0, 28)}>{para}</p>
                      ))}
                    </div>

                    {ch.pull && (
                      <blockquote className="mt-9 border-l-2 border-line pl-6">
                        <p className="font-display d-md text-balance text-chalk">{ch.pull}</p>
                        {ch.pullCite && <cite className="mono mt-3 block not-italic text-faint">{ch.pullCite}</cite>}
                      </blockquote>
                    )}

                    {ch.ranking && (
                      <div className="mt-9">
                        <StoryRanking ranking={ch.ranking} />
                      </div>
                    )}

                    {ch.shots && <StoryShots shots={ch.shots} />}

                    {ch.links && ch.links.length > 0 && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {ch.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-wire !py-2.5"
                          >
                            {l.label} <span aria-hidden>↗</span>
                          </a>
                        ))}
                      </div>
                    )}

                    {ch.products && (
                      <div className="mt-8 flex flex-wrap gap-2.5">
                        {storyProducts.map((p) => (
                          <Link key={p.slug} href={workItemPath(locale, p.slug)} className="tag text-dim transition-colors hover:text-chalk">
                            {p.name}
                          </Link>
                        ))}
                        <Link href={workPath(locale)} className="tag text-ember">
                          {t.common.allWork} →
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      {/* ── WHAT IT TAUGHT ────────────────────────────────────────────── */}
      <section className="rule-t py-16 sm:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
          <Reveal>
            <SectionHead label={c.lessonsKicker} />
            <h2 className="font-display d-xl mt-7 max-w-2xl text-balance">{c.lessonsH2}</h2>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <ol className="rule-t">
              {lessons.map((l, i) => (
                <Reveal key={l.slice(0, 24)} delay={i * 50}>
                  <li className="rule-soft-b flex gap-6 py-5">
                    <span className="mono tnum shrink-0 pt-1 text-ember">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-dim">{l}</span>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal>
              <figure>
                <div className="relative aspect-[4/5] border border-line">
                  <Image
                    src="/me/noe-archive.jpg"
                    alt={c.archiveAlt}
                    fill
                    sizes="(max-width: 1024px) 80vw, 340px"
                    className="portrait object-cover"
                  />
                </div>
                <figcaption className="mt-6">
                  <p className="mono text-faint">{c.offClockKicker}</p>
                  <p className="mt-3 text-sm leading-relaxed text-dim">{c.offClock}</p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CV ────────────────────────────────────────────────────────── */}
      <section id="cv" className="rule-t scroll-mt-20 py-16 sm:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
          <Reveal>
            <SectionHead label={c.cvKicker} />
            <h2 className="font-display d-xl mt-7 max-w-2xl text-balance">{c.cvH2}</h2>
          </Reveal>

          {/* Experience */}
          <div className="mt-14">
            <p className="mono text-faint">{c.experience}</p>
            <div className="rule-t mt-5">
              {roles.map((r) => (
                <Reveal key={r.title + r.org}>
                  <div className="rule-soft-b grid gap-x-10 gap-y-3 py-7 lg:grid-cols-[12rem_1fr]">
                    <p className="mono tnum text-faint lg:pt-1">{r.period}</p>
                    <div>
                      <h3 className="font-display d-md">{r.title}</h3>
                      <p className="mono-flat mt-1.5 font-mono text-sm text-dim">{r.org}</p>
                      <ul className="mt-4 space-y-2">
                        {r.bullets.map((b) => (
                          <li key={b.slice(0, 24)} className="flex gap-3.5 text-sm leading-relaxed text-dim">
                            <span className="mt-2 h-px w-3 shrink-0 bg-ember" aria-hidden />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="mt-16">
            <p className="mono text-faint">{c.stackTools}</p>
            <dl className="rule-t mt-5 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((g) => (
                <div key={g.label} className="bg-void px-5 py-5">
                  <dt className="mono text-ember">{g.label}</dt>
                  <dd className="mono-flat mt-2.5 font-mono text-sm leading-relaxed text-dim">{g.items}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Languages, education, credentials */}
          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            <div>
              <p className="mono text-faint">{c.languages}</p>
              <dl className="rule-t mt-5">
                {languages.map((l) => (
                  <div key={l.name} className="rule-soft-b flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="text-chalk">{l.name}</dt>
                    <dd className="mono text-faint">{l.level}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="mono text-faint">{c.education}</p>
              <ul className="rule-t mt-5">
                {education.map((e) => (
                  <li key={e.title} className="rule-soft-b py-4">
                    <p className="text-sm text-chalk">{e.title}</p>
                    <p className="mono mt-1.5 text-faint">
                      {e.org} · {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mono text-faint">{c.credentials}</p>
              <ul className="rule-t mt-5">
                {credentials.map((cr) => (
                  <li key={cr.title} className="rule-soft-b py-4">
                    <p className="text-sm text-chalk">{cr.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-faint">{cr.org}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cr.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono text-dim underline decoration-ember decoration-1 underline-offset-4 transition-colors hover:text-chalk"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRESS ─────────────────────────────────────────────────────── */}
      <section className="rule-t py-16 sm:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
          <Reveal>
            <SectionHead label={c.pressKicker} />
            <h2 className="font-display d-xl mt-7 max-w-2xl text-balance">{c.pressH2}</h2>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {pressGroups.map((g) => (
              <Reveal key={g.label}>
                <div>
                  <p className="mono text-ember">{g.label}</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-faint">{g.blurb}</p>
                  <ul className="rule-t mt-6">
                    {g.items.map((item) => {
                      const inner = (
                        <>
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="mono-flat font-mono text-sm text-chalk">{item.outlet}</span>
                            <span className="mono shrink-0 text-faint">{item.date}</span>
                          </div>
                          <p className="mt-2 text-sm leading-snug text-dim">{item.title}</p>
                          <p className="mt-1.5 text-xs leading-relaxed text-faint">{item.note}</p>
                        </>
                      );
                      return (
                        <li key={item.outlet + item.date} className="rule-soft-b py-4">
                          {item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group block transition-opacity hover:opacity-80"
                            >
                              {inner}
                              <span className="mono mt-2.5 inline-block text-faint transition-colors group-hover:text-ember">
                                {c.open} ↗
                              </span>
                            </a>
                          ) : (
                            inner
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSE ─────────────────────────────────────────────────────── */}
      <section className="rule-t bg-paper text-ink">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-8 sm:py-28">
          <div className="max-w-3xl">
            <p className="mono flex items-center gap-2 text-rust">
              <span className="dot bg-live" aria-hidden />
              {c.stillHere}
            </p>
            <h2 className="font-display d-xl mt-7 text-balance">{c.ctaH2}</h2>
            <p className="lead mt-6 max-w-xl opacity-75">{c.ctaLead}</p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href={contactPath(locale)} className="btn btn-ember">
                {c.workWithMe} <span aria-hidden>→</span>
              </Link>
              <ObfuscatedEmail className="mono-flat font-mono text-sm underline decoration-rust decoration-2 underline-offset-[6px]" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
