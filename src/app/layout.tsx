import ActiveSectionContextProvider from "@/context/active-section-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar04Page from "@/components/navbar-04/navbar-04";
import Footer03Page from "@/components/footer-03/footer-03";
import StructuredData from "@/components/structured-data";

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

export const metadata: Metadata = {
  title: {
    default: "CarryMart | The Campus Marketplace | Buy & Sell on Your Campus",
    template: "%s | CarryMart"
  },
  description: "CarryMart is the student marketplace for campuses across Ghana. Buy and sell fashion, food, beauty, and more. Discover deals in reels, chat with sellers in real time, and pay safely with the CarryPay escrow wallet.",
  keywords: [
    "campus marketplace",
    "student marketplace",
    "buy and sell campus",
    "student ecommerce Ghana",
    "campus deals",
    "escrow wallet",
    "student sellers",
    "campus shopping app",
    "university marketplace",
    "CarryPay",
    "campus market Ghana",
    "student trading app",
    "university student selling",
    "campus fashion marketplace",
    "student food delivery",
    "escrow payment system",
    "peer-to-peer marketplace",
    "student community platform",
    "Ghana marketplace app",
    "campus social commerce",
    "university deals and discounts",
    "student thrift marketplace",
    "digital wallet for students",
  ],
  authors: [{ name: "CarryMart Team" }],
  creator: "CarryMart",
  publisher: "CarryMart",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.carrymartgh.com"),
  alternates: {
    canonical: "https://www.carrymartgh.com/",
  },
  openGraph: {
    title: "CarryMart | The Campus Marketplace",
    description: "Buy and sell with students on your campus. Discover deals in reels, chat instantly, and pay safely with the CarryPay escrow wallet.",
    url: "https://www.carrymartgh.com",
    siteName: "CarryMart",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CarryMart | The campus marketplace app",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarryMart | The Campus Marketplace",
    description: "Buy and sell with students on your campus. Discover deals in reels, chat instantly, and pay safely with escrow.",
    images: ["/og-image.png"],
    creator: "@carrymart",
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
  category: "Shopping",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CarryMart",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
