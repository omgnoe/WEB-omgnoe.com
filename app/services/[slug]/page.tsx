import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WorkCard from "@/components/WorkCard";
import { getWork } from "@/lib/projects";
import { getService, services } from "@/lib/services";

const SITE = "https://omgnoe.com";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};

  const url = `${SITE}/services/${s.slug}`;
  return {
    title: s.title,
    description: s.meta,
    keywords: s.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${s.title} | Noe Nei`,
      description: s.meta,
    },
    twitter: { card: "summary_large_image", title: `${s.title} | Noe Nei`, description: s.meta },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = s.related.map(getWork).filter((w) => w !== undefined);
  const otherServices = services.filter((o) => o.slug !== s.slug);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.meta,
    url: `${SITE}/services/${s.slug}`,
    provider: { "@type": "Person", name: "Noe Nei", url: SITE },
    areaServed: ["Luxembourg", "Europe"],
    serviceType: s.name,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
      { "@type": "ListItem", position: 3, name: s.title, item: `${SITE}/services/${s.slug}` },
    ],
  };

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <SiteHeader />

      {/* HERO */}
      <section className="stage relative overflow-hidden">
        <div className="dots absolute inset-0" />
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:pt-18">
          <nav className="rise flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-ink">Services</Link>
            <span>/</span>
            <span className="text-ink">{s.name}</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="rise">
              <div className="flex items-start gap-5">
                <span
                  className="hidden h-16 w-16 shrink-0 place-items-center rounded-3xl bg-card shadow-card sm:grid"
                  style={{ color: s.accent === "#171410" ? undefined : s.accent }}
                >
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                    {s.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{s.short}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ObfuscatedEmail className="btn btn-accent" label="Start a conversation" />
                <Link href="/#work" className="btn btn-ghost">
                  See the work
                </Link>
              </div>
            </div>

            {s.photo && (
              <div className="rise relative mx-auto hidden w-full max-w-xs lg:block">
                <div className="card card-lg overflow-hidden p-2 shadow-pop" style={{ transform: "rotate(2deg)" }}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={s.photo}
                      alt={s.photoAlt ?? "Noe Nei"}
                      fill
                      priority
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {s.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="card mt-10 p-6 sm:p-8">
              <p className="kicker">Track record</p>
              <p className="mt-3 leading-relaxed">{s.proof}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card p-6 sm:p-7">
              <p className="kicker">What you get</p>
              <ul className="mt-5 space-y-3.5">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span
                      className="mt-1 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full"
                      style={{ background: `${s.accent === "#171410" ? "#ff5a1f" : s.accent}1c`, color: s.accent === "#171410" ? "#ff5a1f" : s.accent }}
                    >
                      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" aria-hidden>
                        <path d="M2.5 6.5l2.5 2.5 4.5-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
              <ObfuscatedEmail className="btn btn-ink mt-7 w-full" label="Get a quote" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-line bg-paper-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Reveal>
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight">
              Common questions
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {s.faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <div className="card h-full p-6">
                  <h3 className="font-display font-bold leading-snug">{f.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED WORK */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">Proof</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight">
                Work in this area
              </h2>
            </div>
            <Link href="/work" className="btn btn-ghost">
              All work
            </Link>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.slice(0, 3).map((w, i) => (
              <Reveal key={w.slug} delay={i * 80}>
                <WorkCard item={w} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* OTHER SERVICES */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <p className="kicker mb-5">Other services</p>
        <div className="flex flex-wrap gap-2">
          {otherServices.map((o) => (
            <Link key={o.slug} href={`/services/${o.slug}`} className="pill !py-2 font-medium transition-colors hover:border-line-strong">
              <ServiceIcon name={o.icon} className="h-3.5 w-3.5" />
              {o.name}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 sm:px-5">
        <Reveal>
          <div className="card-night relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] px-6 py-16 text-center">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(55% 70% at 50% 120%, rgba(255,90,31,0.3), transparent 70%)" }}
            />
            <h2 className="font-display relative text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s talk about {s.name}.
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-white/65">
              One message is enough. You describe the goal, I reply with a plan.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/#contact" className="btn btn-accent !px-7 !py-3.5">
                Send an inquiry
              </Link>
              <ObfuscatedEmail className="btn !bg-white/10 !text-white/85 font-mono !text-sm hover:!bg-white/15" />
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
