import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jakub Mazur Portfolio",
};

export const playfair = Playfair({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center justify-between w-full p-8 min-h-screen">
          <div className="flex flex-col gap-8 w-full max-w-3xl">
            <Hero />
            <Separator />
            <Navbar />
            <div className="animate-fade-in-up">{children}</div>
            <SpeedInsights />
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
