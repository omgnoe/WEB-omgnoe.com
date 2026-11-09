import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StatusRail from "@/components/StatusRail";
import SystemIndex from "@/components/SystemIndex";
import { getAllWork } from "@/lib/projects";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/ui";

export default function WorkIndexView({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const allWork = getAllWork(locale);

  return (
    <main className="relative">
      <StatusRail locale={locale} />
      <SiteHeader locale={locale} pageKey={{ kind: "work" }} />

      <section className="powered relative overflow-hidden">
        <div className="absolute inset-0" />
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:pt-20">
          <p className="mono rise">{t.workIndex.kicker}</p>
          <h1 className="font-display rise mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            {t.workIndex.h1a}
            <br />
            <span className="underline-swipe">{t.workIndex.h1b}</span>
          </h1>
          <p className="rise mt-6 max-w-xl text-lg text-dim">{t.workIndex.lead}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Reveal>
          <SystemIndex items={allWork} locale={locale} />
        </Reveal>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
