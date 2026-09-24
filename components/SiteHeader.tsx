import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-line bg-card/85 px-4 shadow-card backdrop-blur-xl sm:px-6">
        <Link href="/" className="flex items-center" aria-label="omgnoe, home">
          <Image
            src="/omgnoe-logo.png"
            alt="omgnoe"
            width={144}
            height={34}
            priority
            className="logo-dark h-5 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted sm:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="btn btn-ink !px-4 !py-2 text-sm"
        >
          Hire me
        </Link>
      </div>
    </header>
  );
}
