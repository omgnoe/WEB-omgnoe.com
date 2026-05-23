import Image from "next/image";
import type { SimpleIcon } from "simple-icons";
import {
  siTypescript,
  siNextdotjs,
  siReact,
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
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import WorkCard from "@/components/WorkCard";
import { projects, clients, services, stack } from "@/lib/projects";

const ICONS: Record<string, SimpleIcon> = {
  siTypescript,
  siNextdotjs,
  siReact,
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

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 0c.5 6.2 5.8 11.5 12 12-6.2.5-11.5 5.8-12 12-.5-6.2-5.8-11.5-12-12C6.2 11.5 11.5 6.2 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const common = "h-5 w-5";
  switch (name) {
    case "globe":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path d="M12 3v6m0 6v6m9-9h-6m-6 0H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path d="M3 13l18-7-7 18-2.5-7.5L3 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
  }
}

const nav = [
  { href: "#work", label: "Work" },
  { href: "#clients", label: "Clients" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <main className="relative">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center" aria-label="omgnoe — home">
            <Image
              src="/omgnoe-logo.png"
              alt="omgnoe"
              width={144}
              height={34}
              priority
              className="h-6 w-auto"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-fg">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            Hire me
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-aura relative overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rise min-w-0">
            <h1 className="text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="chrome">Building digital</span>
              <br />
              <span className="chrome">products that ship.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m <span className="text-fg">Noe Nei</span> — a full-stack developer and
              founder from Luxembourg. I design, build and ship web platforms, mobile apps
              and AI automations, end&nbsp;to&nbsp;end.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
              >
                View work
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-white/25"
              >
                Start a project
              </a>
            </div>

            <dl className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <div>
                <dt className="text-2xl font-semibold text-fg">39+</dt>
                <dd className="text-muted">Products shipped</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-fg">24</dt>
                <dd className="text-muted">Based in Luxembourg</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-fg">∞</dt>
                <dd className="text-muted">Ideas in the pipeline</dd>
              </div>
            </dl>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="floaty glass relative overflow-hidden rounded-3xl p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/me/noe.jpg"
                  alt="Noe Nei — developer from Luxembourg"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-line bg-bg/70 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-sm font-medium">Noe Nei</p>
                  <p className="text-xs text-muted">Developer · Founder</p>
                </div>
                <Sparkle className="h-5 w-5 text-white/80" />
              </div>
            </div>
            <Sparkle className="absolute -right-3 -top-3 h-8 w-8 text-violet" />
          </div>
        </div>

        {/* Logo strip */}
        <div className="border-y border-line bg-bg-soft/50">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 text-sm text-muted">
            <span className="text-xs uppercase tracking-widest text-white/40">Built &amp; shipped</span>
            {projects.map((p) => (
              <span key={p.slug} className="font-medium text-white/70">
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK — personal */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Selected work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Products I&apos;ve built end-to-end
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <WorkCard key={p.slug} item={p} />
          ))}
        </div>
      </section>

      {/* WORK — clients */}
      <section id="clients" className="border-t border-line bg-bg-soft/40">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Client work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Brands & businesses I&apos;ve built for
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Websites, shops, back offices and point-of-sale systems delivered for clients
              across Luxembourg and Europe.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c) => (
              <WorkCard key={c.slug} item={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + STACK */}
      <section id="about" className="border-y border-line bg-bg-soft/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              I turn ideas into products people use.
            </h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Based in Luxembourg, I work across the whole stack — from database schema
                and payment infrastructure to pixel-level frontend and native mobile apps.
                I&apos;ve shipped marketplaces, POS systems, encrypted messengers, job
                boards and AI tools.
              </p>
              <p>
                I move fast and ship real things. If you have a product to build, a platform
                to scale, or a workflow to automate, I can take it from idea to production —
                and keep it running.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.title} className="glass rounded-2xl p-5">
                  <div className="grid h-9 w-9 place-items-center rounded-lg border border-line text-white/80">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Stack</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tools I build with
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {stack.map((t) => {
                const icon = ICONS[t.slug];
                return (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3.5 py-2 text-sm text-white/75 transition-colors hover:border-white/25 hover:text-white"
                  >
                    {icon && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 shrink-0 fill-white/70"
                        aria-hidden
                      >
                        <path d={icon.path} />
                      </svg>
                    )}
                    {t.name}
                  </span>
                );
              })}
            </div>

            <div className="mt-10 glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Sparkle className="h-5 w-5 text-violet" />
                <p className="text-sm font-medium">How I work</p>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="text-white/40">01</span>
                  Understand the goal and the user — not just the feature list.
                </li>
                <li className="flex gap-3">
                  <span className="text-white/40">02</span>
                  Design and build the smallest thing that actually ships.
                </li>
                <li className="flex gap-3">
                  <span className="text-white/40">03</span>
                  Deploy, measure, iterate — fast feedback over perfect plans.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-aura relative overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="mx-auto max-w-3xl px-5 py-28 text-center">
          <Sparkle className="mx-auto h-9 w-9 text-violet" />
          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="chrome">Let&apos;s build something.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Got a product, platform or automation in mind? I&apos;m available for new
            projects and collaborations. Reach out and let&apos;s talk.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ObfuscatedEmail
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
              label="Email me →"
            />
            <ObfuscatedEmail className="rounded-full border border-line px-6 py-3.5 font-mono text-sm text-white/70 transition-colors hover:border-white/25 hover:text-white" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Noe Nei · Luxembourg</p>
          <Image
            src="/omgnoe-logo.png"
            alt="omgnoe"
            width={110}
            height={26}
            className="h-4 w-auto opacity-70"
          />
        </div>
      </footer>
    </main>
  );
}
