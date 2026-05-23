import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
    default: "Noe Nei — Developer building digital products | Luxembourg",
    template: "%s | Noe Nei",
  },
  description:
    "Noe Nei is a full-stack developer and founder from Luxembourg. I build web platforms, mobile apps and AI automations end-to-end — and ship them. Available for projects.",
  keywords: [
    "Noe Nei",
    "developer Luxembourg",
    "freelance developer Luxembourg",
    "full-stack developer",
    "web developer Luxembourg",
    "app developer",
    "Next.js developer",
    "Flutter developer",
    "React developer",
    "hire developer",
    "software engineer Luxembourg",
    "AI automation developer",
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
    title: "Noe Nei — Developer building digital products",
    description:
      "Full-stack developer & founder from Luxembourg. Web platforms, mobile apps, AI automations — built and shipped.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noe Nei — Developer building digital products",
    description:
      "Full-stack developer & founder from Luxembourg. Web platforms, mobile apps, AI automations — built and shipped.",
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
    "Full-stack developer and founder building web platforms, mobile apps and AI automations.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LU",
    addressLocality: "Luxembourg",
  },
  knowsAbout: [
    "Web development",
    "Mobile app development",
    "Full-stack engineering",
    "Next.js",
    "Flutter",
    "AI automation",
    "SaaS",
    "Stripe payments",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Independent",
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Software development",
      description:
        "Web platforms, mobile apps and AI automations built end-to-end.",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
