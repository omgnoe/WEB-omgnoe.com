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
import ContactForm from "@/components/ContactForm";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WorkGrid from "@/components/WorkGrid";
import AutoScrollRow from "@/components/AutoScrollRow";
import { trustedBy } from "@/lib/creative";
import { getAllWork, getProjects, stack } from "@/lib/projects";
import { getServices } from "@/lib/services";
import {
  aboutPath,
  contactPath,
  servicePath,
  servicesPath,
  workAnchor,
  workItemPath,
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

const CHIP_STYLE = [
  { rot: "-6deg", pos: "-top-4 left-0 sm:-left-8" },
  { rot: "4deg", pos: "top-14 right-0 sm:-right-10" },
  { rot: "-3deg", pos: "bottom-36 -left-2 sm:-left-12" },
  { rot: "5deg", pos: "bottom-24 right-2 sm:-right-8" },
];

export default function HomeView({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const services = getServices(locale);
  const allWork = getAllWork(locale);
  const projects = getProjects(locale);

  return (
    <main className="relative">
      <SiteHeader locale={locale} pageKey={{ kind: "home" }} />

      {/* HERO */}
      <section className="stage relative overflow-hidden">
        <div className="dots absolute inset-0" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
          <div className="rise min-w-0">
            <p className="kicker">{t.home.kicker}</p>
            <h1 className="font-display mt-5 max-w-2xl text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[3.9rem]">
              {t.home.h1a}{" "}
              <span className="underline-swipe sm:whitespace-nowrap">{t.home.h1b}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.home.lead}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href={workAnchor(locale)} className="btn btn-accent">
                {t.home.ctaWork}
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
                  <path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href={contactPath(locale)} className="btn btn-ghost">
                {t.common.startProject}
              </Link>
            </div>

            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt className="font-display text-3xl font-bold">39+</dt>
                <dd className="text-sm text-muted">{t.home.stats.shipped}</dd>
              </div>
              <div>
                <dt className="font-display text-3xl font-bold">{projects.length}</dt>
                <dd className="text-sm text-muted">{t.home.stats.own}</dd>
              </div>
              <div>
                <dt className="font-display text-3xl font-bold">8</dt>
                <dd className="text-sm text-muted">{t.home.stats.services}</dd>
              </div>
            </dl>
          </div>

          {/* Portrait with floating chips */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="card card-lg relative overflow-hidden p-2.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/me/noe.jpg"
                  alt={t.home.portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3.5">
                <div>
                  <p className="font-display text-sm font-bold">Noe Nei</p>
                  <p className="text-xs text-muted">{t.home.role}</p>
                </div>
                <span className="pill !border-transparent !bg-accent-soft !px-2.5 !text-[0.68rem] font-semibold !text-accent-deep">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {t.home.available}
                </span>
              </div>
            </div>

            {t.home.heroChips.map((label, i) => (
              <span
                key={label}
                className={`floaty pill absolute z-10 !bg-card !px-3.5 !py-2 text-xs font-semibold shadow-card ${CHIP_STYLE[i].pos}`}
                style={{ "--float-rot": CHIP_STYLE[i].rot, animationDelay: `${i * 0.9}s` } as React.CSSProperties}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-line bg-card/60 py-4 backdrop-blur">
          <div className="marquee items-center gap-10 px-5">
            {[0, 1].map((n) => (
              <div key={n} className="flex shrink-0 items-center gap-10" aria-hidden={n === 1}>
                {allWork
                  .filter((w) => w.logo || w.kind === "personal")
                  .concat(allWork.filter((w) => w.kind === "client"))
                  .map((w) => (
                    <Link
                      key={`${n}-${w.slug}`}
                      href={workItemPath(locale, w.slug)}
                      className="font-display flex items-center gap-2.5 whitespace-nowrap text-sm font-bold text-muted transition-colors hover:text-ink"
                    >
                      {w.logo && (
                        <Image src={w.logo} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
                      )}
                      {w.name}
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">{t.home.servicesKicker}</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.servicesH2}
            </h2>
            <p className="mt-3 max-w-xl text-muted">{t.home.servicesLead}</p>
          </div>
          <Link href={servicesPath(locale)} className="btn btn-ghost">
            {t.common.allServices}
          </Link>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const dark = s.slug === "products";
            return (
              <Reveal key={s.slug} delay={(i % 4) * 70}>
                <Link
                  href={servicePath(locale, s.slug)}
                  className={`group flex h-full flex-col p-6 ${
                    dark ? "card-night card-hover shadow-card" : "card card-hover"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-2xl ${
                      dark ? "bg-white/10 text-lime-300" : "bg-paper text-ink"
                    }`}
                    style={!dark ? { color: s.accent === "#171410" ? undefined : s.accent } : undefined}
                  >
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold leading-tight">{s.title}</h3>
                  <p className={`mt-2 flex-1 text-sm leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>
                    {s.short}
                  </p>
                  <span
                    className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${
                      dark ? "text-lime-300" : "text-ink"
                    }`}
                  >
                    {t.common.learnMore}
                    <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" aria-hidden>
                      <path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* I WORKED WITH */}
      <section className="overflow-hidden pb-20">
        <Reveal>
          <div className="border-y border-line bg-card/70 py-10 backdrop-blur">
            <p className="kicker text-center">{t.home.trusted}</p>
            <AutoScrollRow className="mt-8 items-center">
              {[0, 1].map((n) => (
                <div key={n} className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden={n === 1}>
                  {trustedBy.map((tb) => (
                    <span
                      key={`${n}-${tb.name}`}
                      title={tb.name}
                      className="flex h-16 w-36 shrink-0 items-center justify-center rounded-2xl border border-line bg-paper/60 px-5 sm:h-20 sm:w-48 sm:px-7"
                    >
                      <img
                        src={tb.src}
                        alt={`${tb.name} logo`}
                        loading="lazy"
                        style={{ maxHeight: tb.h }}
                        className="trusted-logo max-h-10 w-auto max-w-full sm:max-h-none"
                      />
                    </span>
                  ))}
                </div>
              ))}
            </AutoScrollRow>
            <p className="mt-8 text-center text-xs text-muted">{t.home.trustedMore}</p>
          </div>
        </Reveal>
      </section>

      {/* WORK */}
      <section id="work" className="border-y border-line bg-paper-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <Reveal className="mb-10">
            <p className="kicker">{t.home.workKicker}</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.workH2}
            </h2>
            <p className="mt-3 max-w-xl text-muted">{t.home.workLead}</p>
          </Reveal>
          <Reveal delay={100}>
            <WorkGrid items={allWork} locale={locale} />
          </Reveal>
        </div>
      </section>

      {/* ABOUT + STACK */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="card card-lg overflow-hidden p-2.5" style={{ transform: "rotate(-1.5deg)" }}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/me/noe-suit.jpg"
                  alt={t.home.portraitAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className="card absolute -bottom-6 -right-2 w-40 overflow-hidden p-1.5 shadow-pop sm:-right-6 sm:w-48"
              style={{ transform: "rotate(4deg)" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.1rem]">
                <Image
                  src="/me/noe-archive.jpg"
                  alt={t.home.portraitAlt}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </div>
            <span
              className="floaty pill absolute -left-2 top-6 z-10 !bg-card !px-3.5 !py-2 text-xs font-semibold shadow-card sm:-left-6"
              style={{ "--float-rot": "-4deg" } as React.CSSProperties}
            >
              {t.home.locationChip}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <p className="kicker">{t.home.aboutKicker}</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.aboutH2}
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              {t.home.aboutBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8">
              <Link href={aboutPath(locale)} className="btn btn-ghost">
                {t.home.readStory}
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
                  <path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {t.home.aboutStats.map((s) => (
                <div key={s.l} className="card p-4 text-center">
                  <p className="font-display text-2xl font-bold">{s.n}</p>
                  <p className="mt-1 text-xs text-muted">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">{t.home.stackKicker}</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.stackH2}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((tool) => {
                const icon = ICONS[tool.slug];
                return (
                  <span key={tool.name} className="pill !py-1.5 transition-colors hover:border-line-strong">
                    {icon && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill={`#${icon.hex}`} aria-hidden>
                        <path d={icon.path} />
                      </svg>
                    )}
                    {tool.name}
                  </span>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-night h-full p-6 sm:p-8">
              <p className="font-display text-sm font-bold text-lime-300">{t.home.howKicker}</p>
              <ul className="mt-4 space-y-3.5 text-sm text-white/70">
                {t.home.how.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-mono text-white/35">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-3 sm:px-5">
        <Reveal>
          <div className="card-night relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] px-6 py-14 sm:px-10 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(55% 60% at 20% 110%, rgba(255,90,31,0.3), transparent 70%)",
              }}
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="kicker !text-white/50">{t.home.contactKicker}</p>
                <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {t.home.contactH2}
                </h2>
                <p className="mt-5 max-w-md text-lg text-white/65">{t.home.contactLead}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <ObfuscatedEmail className="btn !bg-white/10 !text-white/85 font-mono !text-sm hover:!bg-white/15" />
                </div>
                <p className="mt-6 text-xs text-white/40">{t.home.replyLine}</p>
              </div>
              <ContactForm locale={locale} />
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
