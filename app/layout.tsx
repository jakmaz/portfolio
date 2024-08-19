import type { Metadata } from "next";
import "./globals.css";
import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Jakub Mazur Portfolio",
};

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
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
