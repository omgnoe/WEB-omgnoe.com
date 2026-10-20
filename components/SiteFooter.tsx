import Image from "next/image";
import Link from "next/link";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { getClients, getProjects } from "@/lib/projects";
import { getServices } from "@/lib/services";
import { aboutPath, servicePath, workItemPath, type Locale } from "@/lib/i18n";
import { dict } from "@/lib/ui";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const services = getServices(locale);
  const projects = getProjects(locale);
  const clients = getClients(locale);

  return (
    <footer className="px-3 pb-3 pt-16 sm:px-5">
      <div className="card card-lg mx-auto max-w-6xl overflow-hidden">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/omgnoe-logo.png"
              alt="omgnoe"
              width={144}
              height={34}
              className="logo-dark h-5 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{t.footer.blurb}</p>
            <ObfuscatedEmail className="mt-5 inline-block font-mono text-sm text-ink underline decoration-accent decoration-2 underline-offset-4" />
            <p className="mt-4 text-sm">
              <Link href={aboutPath(locale)} className="text-muted transition-colors hover:text-ink">
                {t.footer.aboutCv}
              </Link>
            </p>
          </div>

          <div>
            <p className="kicker">{t.footer.services}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={servicePath(locale, s.slug)}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker">{t.footer.products}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={workItemPath(locale, p.slug)}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker">{t.footer.clients}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {clients.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={workItemPath(locale, c.slug)}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line px-8 py-5 text-xs text-muted sm:flex-row sm:px-12">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <p>{t.footer.madeBy}</p>
        </div>
      </div>
    </footer>
  );
}
