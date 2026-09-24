import Image from "next/image";
import Link from "next/link";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { projects, clients } from "@/lib/projects";
import { services } from "@/lib/services";

export default function SiteFooter() {
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
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Noe Nei, full-stack developer and founder in Luxembourg. Apps, websites,
              hosting and IT, built and operated end to end.
            </p>
            <ObfuscatedEmail className="mt-5 inline-block font-mono text-sm text-ink underline decoration-accent decoration-2 underline-offset-4" />
          </div>

          <div>
            <p className="kicker">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-muted transition-colors hover:text-ink">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#creative" className="text-muted transition-colors hover:text-ink">
                  Digital & graphic design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="kicker">Products</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`} className="text-muted transition-colors hover:text-ink">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker">Client work</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {clients.map((c) => (
                <li key={c.slug}>
                  <Link href={`/work/${c.slug}`} className="text-muted transition-colors hover:text-ink">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line px-8 py-5 text-xs text-muted sm:flex-row sm:px-12">
          <p>© {new Date().getFullYear()} Noe Nei · Luxembourg</p>
          <p>Designed, built and hosted by me. Obviously.</p>
        </div>
      </div>
    </footer>
  );
}
