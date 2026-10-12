import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StoryRanking from "@/components/StoryRanking";
import StoryShots from "@/components/StoryShots";
import {
  chapters,
  credentials,
  education,
  languages,
  lessons,
  pressGroups,
  roles,
  skillGroups,
  spellCount,
  storyProducts,
} from "@/lib/story";

const SITE = "https://omgnoe.com";

export const metadata: Metadata = {
  title: "About & CV: from zero, twice",
  description:
    "The long version. Noe Nei started working at fourteen, founded his own agency at eighteen, lost everything with a delivery startup, paid the debt out of his own salary and rebuilt as a developer in Luxembourg. Full CV, experience, stack and education.",
  alternates: { canonical: `${SITE}/about` },
  openGraph: {
    type: "profile",
    url: `${SITE}/about`,
    title: "About & CV | Noe Nei",
    description:
      "Started at fourteen. Own company at eighteen. Lost it all at twenty two. Rebuilt as a developer. The long version, plus the full CV.",
  },
};

const facts = [
  { k: "Based in", v: "Luxembourg" },
  { k: "Born", v: "9 March 2002" },
  { k: "Now", v: "Head Developer, DSP Invest" },
  { k: "Also", v: "Founder of LUXPOS, Salonify, BoxBee" },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Noe Nei",
      url: SITE,
      image: `${SITE}/me/noe-suit.jpg`,
      jobTitle: "Head Developer",
      birthDate: "2002-03-09",
      worksFor: { "@type": "Organization", name: "DSP Invest Sarl" },
      address: { "@type": "PostalAddress", addressCountry: "LU" },
      knowsLanguage: ["lb", "de", "en", "fr"],
      knowsAbout: [
        "Full-stack development",
        "Next.js",
        "Flutter",
        "NestJS",
        "PostgreSQL",
        "Cybersecurity",
        "Managed hosting",
        "SaaS",
      ],
      alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.org })),
      sameAs: [
        "https://www.linkedin.com/in/noe-nei",
        "https://github.com/omgnoe",
        ...pressGroups.flatMap((g) => g.items.map((a) => a.href).filter((h): h is string => !!h)),
      ],
      award: "1st Public's Prize, #OurLuxembourg, Ministere de l'economie, June 2018",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE}/about` },
    ],
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SiteHeader />

      {/* HERO */}
      <section className="stage relative overflow-hidden">
        <div className="dots absolute inset-0" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-14 pt-14 sm:pt-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rise min-w-0">
            <p className="kicker">About · the long version</p>
            <h1 className="font-display mt-5 max-w-2xl text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl">
              I have been to zero.{" "}
              <span className="underline-swipe">Twice is the plan for nobody.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Most portfolios show you the highlight reel. Here is the whole thing:
              first invoice at fourteen, own company at eighteen, a delivery startup
              that took everything I had, two months with nothing, and the rebuild
              that turned me into a developer.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              It is a long read, and the parts that can be checked are linked to
              their sources. If you only want the facts, the CV starts further
              down.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cv" className="btn btn-accent">
                Jump to the CV
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
                  <path d="M8 3v10m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link href="/#contact" className="btn btn-ghost">
                Work with me
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="card card-lg relative overflow-hidden p-2.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/me/noe-suit.jpg"
                  alt="Noe Nei, founder and developer from Luxembourg"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover"
                />
              </div>
              <dl className="divide-y divide-line px-4 py-1">
                {facts.map((f) => (
                  <div key={f.k} className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="kicker !text-[0.62rem]">{f.k}</dt>
                    <dd className="text-right text-xs font-semibold">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <span
              className="floaty pill absolute -left-2 top-8 z-10 !bg-card !px-3.5 !py-2 text-xs font-semibold shadow-card sm:-left-6"
              style={{ "--float-rot": "-5deg" } as React.CSSProperties}
            >
              Still here
            </span>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-y border-line bg-paper-deep/50">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <Reveal className="mb-12">
            <p className="kicker">The story</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {spellCount(chapters.length)} chapters, in order.
            </h2>
          </Reveal>

          <div className="relative">
            {/* spine */}
            <span
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-line-strong sm:block"
            />

            <ol className="space-y-5">
              {chapters.map((ch, i) => {
                const dark = ch.tone === "dark";
                const num = String(i + 1).padStart(2, "0");
                return (
                  <Reveal as="li" key={ch.title} delay={(i % 3) * 60} className="relative sm:pl-12">
                    {/* node */}
                    <span
                      aria-hidden
                      className={`absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border-2 sm:block ${
                        dark
                          ? "border-ink bg-ink"
                          : "border-accent bg-paper"
                      }`}
                    />
                    <article
                      className={`p-6 sm:p-9 ${dark ? "card-night card-lg shadow-pop" : "card card-lg"}`}
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span
                          className={`font-mono text-xs tracking-[0.22em] ${
                            dark ? "text-lime-300" : "text-accent"
                          }`}
                        >
                          {num}
                        </span>
                        <span
                          className={`font-mono text-[0.68rem] uppercase tracking-[0.22em] ${
                            dark ? "text-white/45" : "text-muted"
                          }`}
                        >
                          {ch.period}
                        </span>
                      </div>

                      <h3
                        className={`font-display mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl ${
                          dark ? "text-white" : ""
                        }`}
                      >
                        {ch.title}
                      </h3>

                      <div
                        className={`mt-4 space-y-4 leading-relaxed ${
                          dark ? "text-white/70" : "text-muted"
                        }`}
                      >
                        {ch.body.map((p) => (
                          <p key={p.slice(0, 24)}>{p}</p>
                        ))}
                      </div>

                      {ch.ranking && <StoryRanking ranking={ch.ranking} />}

                      {ch.shots && <StoryShots shots={ch.shots} dark={dark} />}

                      {ch.pull && (
                        <blockquote
                          className={`mt-6 border-l-2 pl-5 ${
                            dark ? "border-lime-300" : "border-accent"
                          }`}
                        >
                          <p
                            className={`font-display text-lg font-semibold leading-snug ${
                              dark ? "text-white" : "text-ink"
                            }`}
                          >
                            {ch.pull}
                          </p>
                          {ch.pullCite && (
                            <cite
                              className={`mt-2 block font-mono text-[0.62rem] uppercase not-italic tracking-[0.14em] ${
                                dark ? "text-white/40" : "text-muted"
                              }`}
                            >
                              {ch.pullCite}
                            </cite>
                          )}
                        </blockquote>
                      )}

                      {ch.links && (
                        <div className="mt-6 flex flex-wrap gap-2.5">
                          {ch.links.map((l) => (
                            <a
                              key={l.href}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`btn !py-2.5 text-sm ${
                                dark
                                  ? "!bg-white/10 !text-white/85 hover:!bg-white/15"
                                  : "btn-ghost"
                              }`}
                            >
                              {l.label}
                              <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden>
                                <path d="M6 3h7v7M13 3 4 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </a>
                          ))}
                        </div>
                      )}

                      {ch.products && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {storyProducts.map((pr) => (
                            <Link
                              key={pr.slug}
                              href={`/work/${pr.slug}`}
                              className="pill !py-1.5 font-semibold transition-colors hover:border-line-strong"
                            >
                              {pr.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </article>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* LESSONS + PHOTO */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <p className="kicker">What it cost, what it taught</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Six things I paid for in cash.
            </h2>
            <ol className="mt-8 space-y-4">
              {lessons.map((l, i) => (
                <li key={l} className="card flex gap-4 p-5">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{l}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100} className="lg:sticky lg:top-24">
            <div className="card card-lg overflow-hidden p-2.5" style={{ transform: "rotate(1.5deg)" }}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/me/noe-archive.jpg"
                  alt="Noe Nei going through printed work"
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="card-night card-lg mt-10 p-6 sm:p-8">
              <p className="font-display text-sm font-bold text-lime-300">Off the clock</p>
              <p className="mt-4 leading-relaxed text-white/70">
                I still make music. I just do not sell it any more. I spent years
                turning everything I loved into an invoice, and this one stays a
                hobby.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="border-y border-line bg-paper-deep/50 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <Reveal className="mb-12">
            <p className="kicker">Curriculum vitae</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The short version, for people in a hurry.
            </h2>
          </Reveal>

          {/* Experience */}
          <Reveal className="mb-14">
            <h3 className="kicker mb-6">Experience</h3>
            <div className="space-y-4">
              {roles.map((r) => (
                <article key={r.title + r.period} className="card p-6 sm:p-8">
                  <div className="grid gap-4 sm:grid-cols-[150px_1fr]">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent sm:pt-1">
                      {r.period}
                    </p>
                    <div>
                      <h4 className="font-display text-xl font-bold leading-tight">{r.title}</h4>
                      <p className="mt-1 text-sm text-muted">{r.org}</p>
                      <ul className="mt-4 space-y-2.5">
                        {r.bullets.map((b) => (
                          <li key={b.slice(0, 24)} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          {/* Stack */}
          <Reveal className="mb-14">
            <h3 className="kicker mb-6">Stack & tools</h3>
            <div className="card divide-y divide-line overflow-hidden">
              {skillGroups.map((g) => (
                <div key={g.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[150px_1fr] sm:gap-4 sm:px-8">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                    {g.label}
                  </p>
                  <p className="text-sm">{g.items}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Languages */}
          <Reveal className="mb-14">
            <h3 className="kicker mb-6">Languages</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {languages.map((l) => (
                <div key={l.name} className="card p-5">
                  <p className="font-display text-lg font-bold leading-tight">{l.name}</p>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                    {l.level}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Education + credentials */}
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h3 className="kicker mb-6">Education</h3>
              <ul className="card divide-y divide-line overflow-hidden">
                {education.map((e) => (
                  <li key={e.title} className="px-6 py-4 sm:px-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-semibold leading-tight">{e.title}</p>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                        {e.period}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-muted">{e.org}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="kicker mb-6">Certifications & awards</h3>
              <ul className="card divide-y divide-line overflow-hidden">
                {credentials.map((c) => (
                  <li key={c.title} className="px-6 py-4 sm:px-8">
                    <p className="font-semibold leading-tight">{c.title}</p>
                    <p className="mt-1 text-sm text-muted">{c.org}</p>
                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                      {c.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] font-semibold text-accent hover:text-accent-deep"
                        >
                          {l.label}
                          <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" aria-hidden>
                            <path d="M6 3h7v7M13 3 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Press */}
          {pressGroups.map((g, gi) => (
            <Reveal key={g.label} className="mt-14" delay={gi * 80}>
              <h3 className="kicker mb-2">{g.label}</h3>
              <p className="mb-6 max-w-xl text-sm text-muted">{g.blurb}</p>
              <ul className="card divide-y divide-line overflow-hidden">
                {g.items.map((a) => {
                  const inner = (
                    <>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                          {a.outlet}
                        </span>
                        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                          {a.date}
                        </span>
                      </div>
                      <p className="mt-1.5 font-semibold leading-snug">{a.title}</p>
                      <p className="mt-1 text-sm text-muted">{a.note}</p>
                    </>
                  );
                  return (
                    <li key={a.title}>
                      {a.href ? (
                        <a
                          href={a.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block px-6 py-5 transition-colors hover:bg-paper sm:px-8"
                        >
                          {inner}
                          <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-ink">
                            Open
                            <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" aria-hidden>
                              <path d="M6 3h7v7M13 3 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </a>
                      ) : (
                        <div className="px-6 py-5 sm:px-8">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 pt-20 sm:px-5">
        <Reveal>
          <div className="card-night relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] px-6 py-14 text-center sm:px-10 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(55% 60% at 50% 115%, rgba(255,90,31,0.3), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="kicker !text-white/50">Still reading</p>
              <h2 className="font-display mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Then you already know how I will treat your project.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
                I build things that have to survive contact with reality, because
                mine did not get the choice.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/#contact" className="btn btn-accent">
                  Start a project
                </Link>
                <Link href="/work" className="btn !bg-white/10 !text-white/85 hover:!bg-white/15">
                  See the work
                </Link>
              </div>
              <div className="mt-8">
                <ObfuscatedEmail className="font-mono text-sm text-white/55 hover:text-white/85" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
