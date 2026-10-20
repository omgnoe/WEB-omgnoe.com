import Link from "next/link";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { getServices } from "@/lib/services";
import { servicePath, urlFor, type Locale } from "@/lib/i18n";
import { dict } from "@/lib/ui";

export default function ServicesIndexView({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const services = getServices(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.servicesIndex.kicker,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: urlFor(locale, { kind: "service", canonical: s.slug }),
    })),
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader locale={locale} pageKey={{ kind: "services" }} />

      <section className="stage relative overflow-hidden">
        <div className="dots absolute inset-0" />
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:pt-20">
          <p className="kicker rise">{t.servicesIndex.kicker}</p>
          <h1 className="font-display rise mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            {t.servicesIndex.h1a}
            <br />
            <span className="underline-swipe">{t.servicesIndex.h1b}</span>
          </h1>
          <p className="rise mt-6 max-w-xl text-lg text-muted">{t.servicesIndex.lead}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 80}>
              <Link
                href={servicePath(locale, s.slug)}
                className="card card-hover group flex h-full gap-5 p-6 sm:p-7"
              >
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-paper"
                  style={{ color: s.accent === "#171410" ? undefined : s.accent }}
                >
                  <ServiceIcon name={s.icon} className="h-5.5 w-5.5" />
                </span>
                <div className="flex flex-1 flex-col">
                  <h2 className="font-display text-xl font-bold">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                  <p className="mt-3 text-xs text-muted">{s.proof}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    {t.servicesIndex.cardCta}
                    <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" aria-hidden>
                      <path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="card-night relative overflow-hidden rounded-[2.25rem] px-6 py-14 text-center">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(55% 70% at 50% 120%, rgba(255,90,31,0.3), transparent 70%)" }}
            />
            <h2 className="font-display relative text-3xl font-bold text-white">
              {t.servicesIndex.ctaH2}
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-white/65">{t.servicesIndex.ctaLead}</p>
            <div className="relative mt-7">
              <ObfuscatedEmail className="btn btn-accent !px-7 !py-3.5" label={t.common.emailMe} />
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
