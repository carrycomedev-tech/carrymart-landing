import ActiveSectionContextProvider from "@/context/active-section-context";
import type { Metadata } from "next";
import { Urbanist, Outfit } from "next/font/google";
import "./globals.css";
import Navbar04Page from "@/components/navbar-04/navbar-04";
import Footer03Page from "@/components/footer-03/footer-03";
import StructuredData from "@/components/structured-data";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "CarryCome - Campus Delivery Made Easy | Student-to-Student Delivery Service",
    template: "%s | CarryCome"
  },
  description: "Join CarryCome, the student-powered campus delivery network. Get food, documents, and parcels delivered fast by fellow students. Earn money as a courier or get what you need delivered quickly.",
  keywords: [
    "campus delivery",
    "student delivery service", 
    "university food delivery",
    "campus courier",
    "student jobs",
    "peer-to-peer delivery",
    "campus errands",
    "student earn money",
    "university delivery app",
    "campus logistics"
  ],
  authors: [{ name: "CarryCome Team" }],
  creator: "CarryCome",
  publisher: "CarryCome",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://carrycome.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CarryCome - Campus Delivery Made Easy",
    description: "Join the student-powered campus delivery revolution. Get what you need delivered fast or earn money as a courier.",
    url: "https://carrycome.com",
    siteName: "CarryCome",
    images: [
      {
        url: "/assets/hero-image.png",
        width: 1200,
        height: 630,
        alt: "CarryCome - Student delivery service on campus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarryCome - Campus Delivery Made Easy",
    description: "Join the student-powered campus delivery revolution. Get what you need delivered fast or earn money as a courier.",
    images: ["/assets/hero-image.png"],
    creator: "@carrycome",
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
  category: "Education Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${outfit.variable} antialiased`}>
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

