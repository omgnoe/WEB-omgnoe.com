import Link from "next/link";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import Glitch from "@/components/Glitch";
import Reveal from "@/components/Reveal";
import ServiceDiagram from "@/components/ServiceDiagram";
import ServiceIcon from "@/components/ServiceIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SystemIndex from "@/components/SystemIndex";
import { getDiagram } from "@/lib/diagrams";
import { getWorkLocalised } from "@/lib/projects";
import { getServices, type Service } from "@/lib/services";
import {
  contactPath,
  homePath,
  servicePath,
  servicesPath,
  urlFor,
  workAnchor,
  workPath,
  HTML_LANG,
  SITE,
  type Locale,
} from "@/lib/i18n";
import { dict } from "@/lib/ui";
import { providerLd } from "@/lib/schema";

export default function ServiceDetailView({
  locale,
  service: s,
}: {
  locale: Locale;
  service: Service;
}) {
  const t = dict(locale);
  const url = urlFor(locale, { kind: "service", canonical: s.slug });
  const related = s.related
    .map((slug) => getWorkLocalised(locale, slug))
    .filter((w) => w !== undefined);
  const otherServices = getServices(locale).filter((o) => o.slug !== s.slug);
  const diagram = getDiagram(locale, s.slug);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.meta,
    url,
    inLanguage: HTML_LANG[locale],
    provider: providerLd(),
    areaServed: [
      { "@type": "Country", name: "Luxembourg" },
      { "@type": "AdministrativeArea", name: "Grande Region" },
      { "@type": "Place", name: "Europe" },
    ],
    serviceType: s.name,
    termsOfService: `${SITE}/services`,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      availableLanguage: ["fr", "de", "en", "lb"],
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: HTML_LANG[locale],
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
      { "@type": "ListItem", position: 1, name: t.common.home, item: urlFor(locale, { kind: "home" }) },
      {
        "@type": "ListItem",
        position: 2,
        name: t.nav.services,
        item: urlFor(locale, { kind: "services" }),
      },
      { "@type": "ListItem", position: 3, name: s.title, item: url },
    ],
  };

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <SiteHeader locale={locale} pageKey={{ kind: "service", canonical: s.slug }} pageLabel={s.name} />

      {/* HERO */}
      <section className="powered guides relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-[90rem] px-4 pb-14 pt-10 sm:px-8">
          <nav className="mono flex items-center gap-2 text-faint" aria-label={t.common.breadcrumb}>
            <Link href={homePath(locale)} className="transition-colors hover:text-chalk">
              {t.common.home}
            </Link>
            <span aria-hidden>/</span>
            <Link href={servicesPath(locale)} className="transition-colors hover:text-chalk">
              {t.nav.services}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-dim">{s.name}</span>
          </nav>

          <div className="mt-10 flex items-start gap-5">
            <span className="mt-2 hidden h-12 w-12 shrink-0 place-items-center border border-line bg-panel text-ember sm:grid">
              <ServiceIcon name={s.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h1 className="font-display d-xl aberrate max-w-4xl text-balance">
                <Glitch text={s.title} />
              </h1>
              <p className="lead mt-6 max-w-2xl text-dim">{s.short}</p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={contactPath(locale)} className="btn btn-ember">
              {t.common.startConversation} <span aria-hidden>→</span>
            </Link>
            <Link href={workAnchor(locale)} className="btn btn-wire">
              {t.common.seeWork}
            </Link>
          </div>
        </div>
      </section>

      {/* 01 HOW IT WORKS: prose plus the mechanism drawn out */}
      <section data-sec={`01 / ${t.service.howItWorks}`} className="rule-t py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
          <Reveal>
            <div className="sec-head">
              <span className="mono text-ember">01 / {t.service.howItWorks}</span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.25fr]">
            <Reveal>
              <div className="space-y-5 text-dim">
                {s.intro.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </div>
              <div className="rule-t mt-8 pt-6">
                <p className="mono text-faint">{t.service.trackRecord}</p>
                <p className="mt-3 leading-relaxed text-chalk">{s.proof}</p>
              </div>
            </Reveal>

            {diagram && (
              <Reveal delay={100}>
                <ServiceDiagram diagram={diagram} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* 02 WHAT YOU GET */}
      <section data-sec={`02 / ${t.service.whatYouGet}`} className="rule-t py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
          <Reveal>
            <div className="sec-head">
              <span className="mono text-ember">02 / {t.service.whatYouGet}</span>
            </div>
          </Reveal>

          <ul className="rule-t mt-10 grid gap-px bg-line md:grid-cols-2 xl:grid-cols-3">
            {s.deliverables.map((d, i) => (
              <Reveal key={d} delay={i * 40}>
                <li className="flex h-full gap-4 bg-void px-5 py-5">
                  <span className="mono tnum shrink-0 pt-0.5 text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-dim">{d}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 03 QUESTIONS */}
      <section data-sec={`03 / ${t.service.faqKicker}`} className="rule-t py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
          <Reveal>
            <div className="sec-head">
              <span className="mono text-ember">03 / {t.service.faqKicker}</span>
            </div>
            <h2 className="font-display d-lg mt-8 max-w-2xl text-balance">{t.service.faqH2}</h2>
          </Reveal>

          <dl className="rule-t mt-10">
            {s.faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <div className="rule-soft-b grid gap-x-10 gap-y-3 py-6 lg:grid-cols-[1fr_1.3fr]">
                  <dt className="font-display d-md max-w-[26ch] text-balance">{f.q}</dt>
                  <dd className="leading-relaxed text-dim">{f.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 04 PROOF */}
      {related.length > 0 && (
        <section data-sec={`04 / ${t.service.proofKicker}`} className="rule-t py-16 sm:py-20">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
            <Reveal>
              <div className="sec-head">
                <span className="mono text-ember">04 / {t.service.proofKicker}</span>
              </div>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                <h2 className="font-display d-lg max-w-2xl text-balance">{t.service.proofH2}</h2>
                <Link href={workPath(locale)} className="btn btn-wire">
                  {t.common.allWork}
                </Link>
              </div>
            </Reveal>
            <div className="mt-10">
              <SystemIndex items={related} locale={locale} showTagFilter={false} />
            </div>
          </div>
        </section>
      )}

      {/* OTHER SERVICES */}
      <section className="rule-t py-14">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
          <p className="mono text-faint">{t.service.otherServices}</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {otherServices.map((o) => (
              <Link
                key={o.slug}
                href={servicePath(locale, o.slug)}
                className="tag text-dim transition-colors hover:border-line-strong hover:text-chalk"
              >
                <ServiceIcon name={o.icon} className="h-3.5 w-3.5 text-ember" />
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: the one light surface, same move as the homepage */}
      <section className="rule-t bg-paper text-ink">
        <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <span className="mono text-rust">{t.service.otherServices}</span>
            <h2 className="font-display d-xl mt-7 text-balance">{t.service.ctaH2(s.name)}</h2>
            <p className="lead mt-6 max-w-xl opacity-75">{t.service.ctaLead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link href={contactPath(locale)} className="btn btn-ember">
                {t.common.sendInquiry} <span aria-hidden>→</span>
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
