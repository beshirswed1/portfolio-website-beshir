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
  title: "BESHIR SWED | Front-End Developer",
  description: "Portfolio of Beshir Swed, a creative Front-End Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Front-End Developer", "React", "Next.js", "Web Development", "Beshir Swed", "Portfolio", "JavaScript", "Tailwind CSS"],
  authors: [{ name: "Beshir Swed" }],
  creator: "Beshir Swed",
  openGraph: {
    title: "BESHIR SWED | Front-End Developer",
    description: "Creative Front-End Developer specializing in building exceptional digital experiences.",
    url: "https://beshir-swed.vercel.app", 
    siteName: "Beshir Swed Portfolio",
    images: [
      {
        url: "/assets/preview.png", 
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
    title: "BESHIR SWED | Front-End Developer",
    description: "Creative Front-End Developer specializing in React and Next.js.",
    images: ["/assets/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
