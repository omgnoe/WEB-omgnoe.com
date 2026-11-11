import Image from "next/image";
import Link from "next/link";
import CaseGallery from "@/components/CaseGallery";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WorkCard from "@/components/WorkCard";
import { getAllWork, type WorkItem } from "@/lib/projects";
import { homePath, urlFor, workPath, HTML_LANG, SITE, type Locale } from "@/lib/i18n";
import { dict } from "@/lib/ui";
import { PERSON_ID } from "@/lib/schema";

function hostOf(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export default function WorkDetailView({
  locale,
  item: w,
}: {
  locale: Locale;
  item: WorkItem;
}) {
  const t = dict(locale);
  const url = urlFor(locale, { kind: "workItem", slug: w.slug });
  const others = getAllWork(locale)
    .filter((o) => o.slug !== w.slug && o.kind === w.kind)
    .slice(0, 3);
  const own = w.kind === "personal";
  const host = hostOf(w.url);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: w.name,
    headline: `${w.name}: ${w.tagline}`,
    description: w.description,
    url,
    inLanguage: HTML_LANG[locale],
    ...(w.url ? { sameAs: w.url } : {}),
    ...(w.shot ? { image: `${SITE}${w.shot}` } : {}),
    creator: { "@id": PERSON_ID },
    keywords: w.tags.join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.common.home, item: urlFor(locale, { kind: "home" }) },
      { "@type": "ListItem", position: 2, name: t.nav.work, item: urlFor(locale, { kind: "work" }) },
      { "@type": "ListItem", position: 3, name: w.name, item: url },
    ],
  };

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <SiteHeader locale={locale} pageKey={{ kind: "workItem", slug: w.slug }} pageLabel={w.name} />

      <article className="powered relative overflow-hidden">
        <div className="absolute inset-0" />
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:pt-16">
          <nav className="rise flex items-center gap-2 text-xs text-dim" aria-label={t.common.breadcrumb}>
            <Link href={homePath(locale)} className="hover:text-chalk">{t.common.home}</Link>
            <span>/</span>
            <Link href={workPath(locale)} className="hover:text-chalk">{t.nav.work}</Link>
            <span>/</span>
            <span className="text-chalk">{w.name}</span>
          </nav>

          {/* header */}
          <div className="rise mt-8 flex flex-wrap items-center gap-2.5">
            <span
              className={`tag !text-[0.7rem] font-semibold uppercase tracking-wide ${
                own ? "!border-transparent !bg-ember !text-ink" : "text-dim"
              }`}
            >
              {own ? t.common.ownProduct : t.common.clientWork}
            </span>
            {w.role.map((r) => (
              <span key={r} className="tag tag">
                {r}
              </span>
            ))}
          </div>

          <div className="rise mt-6 flex items-center gap-5">
            {w.logo && (
              <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-[3px] border border-line bg-panel">
                <Image src={w.logo} alt={`${w.name} logo`} width={64} height={64} className="h-10 w-10 object-contain" />
              </div>
            )}
            <div>
              <h1 className="font-display d-xl">{w.name}</h1>
              {/* The brand accent rides a rule rather than the text itself:
                  several client accents (the purple, the blues) fail AA as
                  body copy on this substrate. */}
              <p className="mt-3 flex items-center gap-3 text-lg text-dim">
                <span
                  className="h-4 w-0.5 shrink-0"
                  style={{ background: w.accent }}
                  aria-hidden
                />
                {w.tagline}
              </p>
            </div>
          </div>

          {/* visual */}
          {w.shot && (
            <Reveal className="mt-10">
              <div className="panel panel overflow-hidden p-2.5">
                <div className="overflow-hidden rounded-[1.6rem] border border-line">
                  <div className="browser-bar">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    {host && <span className="ml-2 font-mono text-[0.7rem] text-dim">{host}</span>}
                  </div>
                  <div className="shot-frame relative aspect-[16/10]">
                    <Image
                      src={w.shot}
                      alt={t.workItem.shotAlt(w.name)}
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
            <Reveal className="space-y-5 text-lg leading-relaxed text-dim">
              {w.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>

            <Reveal delay={100}>
              <aside className="panel sticky top-24 p-6">
                <p className="mono">{t.workItem.scope}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {w.role.map((r) => (
                    <span key={r} className="tag !py-1 !text-[0.72rem]">
                      {r}
                    </span>
                  ))}
                </div>
                <p className="mono mt-6">{t.workItem.stack}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {w.tags.map((tag) => (
                    <span key={tag} className="tag tag !py-1 !text-[0.72rem]">
                      {tag}
                    </span>
                  ))}
                </div>
                {w.url && (
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-chalk mt-7 w-full"
                  >
                    {t.common.visitSite}
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
              <p className="mono">{t.workItem.galleryKicker}</p>
              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight">
                {t.workItem.galleryH2}
              </h2>
              <CaseGallery items={w.gallery} accent={w.accent} host={host} />
            </Reveal>
          )}

          {/* under the hood */}
          {w.highlights && w.highlights.length > 0 && (
            <Reveal className="mt-16">
              <p className="mono">{t.workItem.hoodKicker}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {w.highlights.map((h, i) => (
                  <li key={i} className="panel flex items-start gap-3 p-5">
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
        <section className="border-t border-line bg-panel-2">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display mb-8 text-2xl font-bold tracking-tight">
              {w.kind === "client" ? t.workItem.moreClients : t.workItem.moreProducts}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 80}>
                  <WorkCard item={o} locale={locale} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-3 pt-16 sm:px-5">
        <Reveal>
          <div className="panel relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] px-6 py-16 text-center">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(55% 70% at 50% 120%, rgba(255,90,31,0.3), transparent 70%)" }}
            />
            <h2 className="font-display relative text-3xl font-bold text-white sm:text-4xl">
              {t.workItem.ctaH2}
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-white/65">{t.workItem.ctaLead}</p>
            <div className="relative mt-7">
              <ObfuscatedEmail className="btn btn-ember !px-7 !py-3.5" label={t.common.emailMe} />
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
