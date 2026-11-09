import Image from "next/image";
import Link from "next/link";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { getClients, getProjects } from "@/lib/projects";
import { getServices } from "@/lib/services";
import { SNAPSHOT_DATE } from "@/lib/proof";
import { aboutPath, servicePath, workItemPath, type Locale } from "@/lib/i18n";
import { dict } from "@/lib/ui";

/**
 * A directory, not a decorative slab: everything bracketed and indexed, with a
 * status line at the bottom that matches the rail at the top of the page.
 */
export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const services = getServices(locale);
  const projects = getProjects(locale);
  const clients = getClients(locale);

  const columns = [
    { label: t.footer.services, items: services.map((s) => ({ href: servicePath(locale, s.slug), name: s.name })) },
    { label: t.footer.products, items: projects.map((p) => ({ href: workItemPath(locale, p.slug), name: p.name })) },
    { label: t.footer.clients, items: clients.map((c) => ({ href: workItemPath(locale, c.slug), name: c.name })) },
  ];

  return (
    <footer className="rule-t">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
        <div className="grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image src="/omgnoe-logo.png" alt="omgnoe" width={144} height={34} className="h-4 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-dim">{t.footer.blurb}</p>
            <ObfuscatedEmail className="mono-flat mt-6 inline-block font-mono text-sm text-chalk underline decoration-ember decoration-2 underline-offset-4" />
            <p className="mt-5">
              <Link href={aboutPath(locale)} className="mono text-faint transition-colors hover:text-chalk">
                {t.footer.aboutCv}
              </Link>
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.label}>
              <p className="mono text-faint">{col.label}</p>
              <ul className="mt-5 space-y-2.5">
                {col.items.map((i) => (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      className="mono-flat group inline-flex items-center gap-2 font-mono text-sm text-dim transition-colors hover:text-chalk"
                    >
                      <span className="text-faint transition-colors group-hover:text-ember" aria-hidden>
                        [
                      </span>
                      {i.name}
                      <span className="text-faint transition-colors group-hover:text-ember" aria-hidden>
                        ]
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rule-t flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono flex items-center gap-2 text-dim">
            <span className="dot dot-live" aria-hidden />
            {t.op.footStatus}
          </p>
          <p className="mono text-faint">{t.op.footSnapshot(SNAPSHOT_DATE)}</p>
          <p className="mono text-faint">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
