import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WorkCard from "@/components/WorkCard";
import { allWork, getWork } from "@/lib/projects";

const SITE = "https://omgnoe.com";

export function generateStaticParams() {
  return allWork.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) return {};

  const title = `${w.name}: ${w.tagline}`;
  const url = `${SITE}/work/${w.slug}`;
  const image = w.shot ?? "/opengraph-image";

  return {
    title,
    description: w.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: w.description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: w.description,
      images: [image],
    },
  };
}

function hostOf(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) notFound();

  const others = allWork.filter((o) => o.slug !== w.slug && o.kind === w.kind).slice(0, 3);
  const own = w.kind === "personal";
  const host = hostOf(w.url);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: w.name,
    headline: `${w.name}: ${w.tagline}`,
    description: w.description,
    url: `${SITE}/work/${w.slug}`,
    ...(w.url ? { sameAs: w.url } : {}),
    ...(w.shot ? { image: `${SITE}${w.shot}` } : {}),
    creator: { "@type": "Person", name: "Noe Nei", url: SITE },
    keywords: w.tags.join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE}/work` },
      { "@type": "ListItem", position: 3, name: w.name, item: `${SITE}/work/${w.slug}` },
    ],
  };

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <SiteHeader />

      <article className="stage relative overflow-hidden">
        <div className="dots absolute inset-0" />
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:pt-16">
          <nav className="rise flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-ink">Work</Link>
            <span>/</span>
            <span className="text-ink">{w.name}</span>
          </nav>

          {/* header */}
          <div className="rise mt-8 flex flex-wrap items-center gap-2.5">
            <span
              className={`pill !text-[0.7rem] font-semibold uppercase tracking-wide ${
                own ? "!border-transparent !bg-accent !text-white" : "!bg-card text-muted"
              }`}
            >
              {own ? "Own product" : "Client work"}
            </span>
            {w.role.map((r) => (
              <span key={r} className="pill pill-muted">
                {r}
              </span>
            ))}
          </div>

          <div className="rise mt-6 flex items-center gap-5">
            {w.logo && (
              <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-3xl border border-line bg-card shadow-card">
                <Image src={w.logo} alt={`${w.name} logo`} width={64} height={64} className="h-10 w-10 object-contain" />
              </div>
            )}
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{w.name}</h1>
              <p className="mt-1 text-lg font-medium" style={{ color: w.accent }}>
                {w.tagline}
              </p>
            </div>
          </div>

          {/* visual */}
          {w.shot && (
            <Reveal className="mt-10">
              <div className="card card-lg overflow-hidden p-2.5 shadow-pop">
                <div className="overflow-hidden rounded-[1.6rem] border border-line">
                  <div className="browser-bar">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    {host && <span className="ml-2 font-mono text-[0.7rem] text-muted">{host}</span>}
                  </div>
                  <div className="shot-frame relative aspect-[16/10]">
                    <Image
                      src={w.shot}
                      alt={`${w.name} website screenshot`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 1000px"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* body */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
              {w.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>

            <Reveal delay={100}>
              <aside className="card sticky top-24 p-6">
                <p className="kicker">Scope</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {w.role.map((r) => (
                    <span key={r} className="pill !py-1 !text-[0.72rem]">
                      {r}
                    </span>
                  ))}
                </div>
                <p className="kicker mt-6">Stack</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {w.tags.map((t) => (
                    <span key={t} className="pill pill-muted !py-1 !text-[0.72rem]">
                      {t}
                    </span>
                  ))}
                </div>
                {w.url && (
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ink mt-7 w-full"
                  >
                    Visit live site
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden>
                      <path d="M6 3h7v7M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </aside>
            </Reveal>
          </div>

          {/* gallery */}
          {w.gallery && w.gallery.length > 0 && (
            <Reveal className="mt-16">
              <p className="kicker">Gallery</p>
              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight">A closer look</h2>
              <div className="no-scrollbar -mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2">
                {w.gallery.map((g) => (
                  <figure
                    key={g.src}
                    className={`relative shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-card shadow-card ${
                      g.kind === "app" ? "aspect-[9/19.5] h-80 sm:h-[26rem]" : "aspect-[16/10] h-56 sm:h-72"
                    }`}
                  >
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, 480px"
                      className="object-cover object-top"
                    />
                  </figure>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted sm:hidden">Swipe for more</p>
            </Reveal>
          )}

          {/* under the hood */}
          {w.highlights && w.highlights.length > 0 && (
            <Reveal className="mt-16">
              <p className="kicker">Under the hood</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {w.highlights.map((h, i) => (
                  <li key={i} className="card flex items-start gap-3 p-5">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: w.accent }} />
                    <span className="text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </article>

      {/* more work */}
      {others.length > 0 && (
        <section className="border-t border-line bg-paper-deep/50">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display mb-8 text-2xl font-bold tracking-tight">
              More {w.kind === "client" ? "client work" : "products"}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 80}>
                  <WorkCard item={o} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-3 pt-16 sm:px-5">
        <Reveal>
          <div className="card-night relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] px-6 py-16 text-center">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(55% 70% at 50% 120%, rgba(255,90,31,0.3), transparent 70%)" }}
            />
            <h2 className="font-display relative text-3xl font-bold text-white sm:text-4xl">
              Have a project like this?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-white/65">
              I build websites, platforms, shops and apps end to end. Tell me what you
              have in mind.
            </p>
            <div className="relative mt-7">
              <ObfuscatedEmail className="btn btn-accent !px-7 !py-3.5" label="Email me" />
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
