import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { services } from "@/lib/services";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE = "https://omgnoe.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Noe Nei | Apps, websites & IT from Luxembourg",
    template: "%s | Noe Nei",
  },
  description:
    "Noe Nei is a full-stack developer and founder from Luxembourg. iOS and Android apps, websites, app publishing, cybersecurity, hosting and IT management. Built end to end, then kept running.",
  keywords: [
    "Noe Nei",
    "developer Luxembourg",
    "freelance developer Luxembourg",
    "full-stack developer",
    "web developer Luxembourg",
    "app developer Luxembourg",
    "iOS app development Luxembourg",
    "Android app development",
    "app publishing",
    "IT support Luxembourg",
    "cybersecurity Luxembourg",
    "managed hosting Luxembourg",
    "Next.js developer",
    "Flutter developer",
    "hire developer",
    "software engineer Luxembourg",
    "SaaS developer",
    "Luxembourg",
  ],
  authors: [{ name: "Noe Nei", url: SITE }],
  creator: "Noe Nei",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Noe Nei",
    title: "Noe Nei | Apps, websites & IT from Luxembourg",
    description:
      "Full-stack developer and founder from Luxembourg. Apps, websites, cybersecurity, hosting and IT management. Built end to end, then kept running.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noe Nei | Apps, websites & IT from Luxembourg",
    description:
      "Full-stack developer and founder from Luxembourg. Apps, websites, cybersecurity, hosting and IT management.",
    creator: "@omgnoe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noe Nei",
  url: SITE,
  image: `${SITE}/me/noe.jpg`,
  jobTitle: "Software Developer",
  description:
    "Full-stack developer and founder building apps, websites and infrastructure from Luxembourg.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LU",
    addressLocality: "Luxembourg",
  },
  knowsAbout: [
    "Web development",
    "iOS app development",
    "Android app development",
    "App Store publishing",
    "Cybersecurity",
    "Managed hosting",
    "IT support",
    "Next.js",
    "Flutter",
    "AI automation",
    "SaaS",
    "Stripe payments",
  ],
  worksFor: {
    "@type": "Organization",
    name: "TTA Technologies",
    url: "https://tta.lu",
  },
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.short,
      url: `${SITE}/services/${s.slug}`,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
