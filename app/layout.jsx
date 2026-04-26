import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://beshir-swed.vercel.app"),
  title: {
    default: "BESHIR SWED | Front-End Developer",
    template: "%s | BESHIR SWED",
  },
  description: "Portfolio of Beshir Swed, a creative Front-End Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Front-End Developer", "React", "Next.js", "Web Development", "Beshir Swed", "Portfolio", "JavaScript", "Tailwind CSS"],
  authors: [{ name: "Beshir Swed" }],
  creator: "Beshir Swed",
  generator: "Next.js",
  applicationName: "Beshir Swed Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://beshir-swed.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  appleWebApp: {
    title: "Beshir Swed",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  openGraph: {
    title: "BESHIR SWED | Front-End Developer",
    description: "Creative Front-End Developer specializing in building exceptional digital experiences.",
    url: "https://beshir-swed.vercel.app",
    siteName: "Beshir Swed Portfolio",
    images: [
      {
        url: "https://beshir-swed.vercel.app/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "Beshir Swed Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@BeshirSwed",
    site: "@BeshirSwed",
    title: "BESHIR SWED | Front-End Developer",
    description: "Creative Front-End Developer specializing in React and Next.js.",
    images: ["https://beshir-swed.vercel.app/assets/preview.png"],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Beshir Swed",
              url: "https://beshir-swed.vercel.app",
              jobTitle: "Front-End Developer"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A] text-white`}
        suppressHydrationWarning
      >
        <Header />
        <StairTransition />
        <PageTransition>
          <main className="pt-28">
            {children}
          </main>
        </PageTransition>
      </body>
    </html>
  );
}
