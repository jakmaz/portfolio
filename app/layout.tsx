import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Jakub Mazur",
    default: "Jakub Mazur",
  },
  description: "Jakub Mazur's personal website",
  keywords: ["Jakub Mazur", "portfolio", "developer"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jakubmazur.com",
    title: "Jakub Mazur",
    description: "Jakub Mazur's personal website",
    images: [
      {
        url: "https://www.jakubmazur.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jakub Mazur",
      },
    ],
  },
};

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <main className="flex flex-col items-center justify-between w-full p-8 min-h-screen">
          <div className="flex flex-col gap-8 w-full max-w-3xl">
            <Hero />
            <Separator />
            <Navbar />
            <div className="animate-fade-in-up">{children}</div>
            <SpeedInsights />
            <Analytics />
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
