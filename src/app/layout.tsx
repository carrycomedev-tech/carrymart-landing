import ActiveSectionContextProvider from "@/context/active-section-context";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar04Page from "@/components/navbar-04/navbar-04";
import Footer03Page from "@/components/footer-03/footer-03";
import StructuredData from "@/components/structured-data";
import { BRAND, SITE_URL } from "@/lib/seo";

const criteria = localFont({
  src: [
    { path: "../fonts/CriteriaCF-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/CriteriaCF-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../fonts/CriteriaCF-Super.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-criteria",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Root metadata. Brand facts come from `@/lib/seo` so the <head> and the JSON-LD
 * graph can never disagree — a title that says one thing and a schema node that
 * says another is how an entity ends up ambiguous.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} | ${BRAND.tagline} for students in Ghana`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.metaDescription,
  applicationName: BRAND.name,
  /**
   * Google has ignored the keywords meta since 2009, so this is kept short and
   * honest rather than stuffed. It stays because a handful of smaller engines
   * still read it, and because it documents the target query set in one place.
   */
  keywords: [
    "campus marketplace",
    "student marketplace Ghana",
    "best campus marketplace platform",
    "university marketplace app",
    "buy and sell on campus",
    "CarryPay escrow wallet",
    "student sellers Ghana",
  ],
  authors: [{ name: `${BRAND.name} Team`, url: SITE_URL }],
  creator: BRAND.name,
  publisher: BRAND.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description:
      "Buy and sell with students on your campus. Discover deals in reels, chat instantly, and pay safely with the CarryPay escrow wallet.",
    url: SITE_URL,
    siteName: BRAND.name,
    images: [
      {
        url: BRAND.ogImage,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} | ${BRAND.tagline} app`,
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description:
      "Buy and sell with students on your campus. Discover deals in reels, chat instantly, and pay safely with escrow.",
    images: [BRAND.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  /**
   * Verification tokens come from the environment so a token is never committed,
   * and so a preview deploy cannot claim the production property. Each key is
   * omitted entirely when its variable is unset, because an empty verification
   * meta tag is worse than none — Search Console reads it as a failed check.
   */
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
  category: "Shopping",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: BRAND.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#F50053",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GH">
      <body className={`${criteria.variable} ${inter.variable} antialiased`}>
        <StructuredData />
        <ActiveSectionContextProvider>
          <Navbar04Page />
          {children}
          <Footer03Page />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
