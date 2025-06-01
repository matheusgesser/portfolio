import type { Metadata } from "next";
import { Geist, Raleway, Metrophobic } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Footer } from "@/components/footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: "700",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: "600",
});

const metrophobic = Metrophobic({
  variable: "--font-metrophobic",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Matheus Gesser | Frontend Developer",
  description: "Personal portfolio of a developer with a passion for frontend",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${raleway.className} ${metrophobic.className} antialiased`}>
        <main className="flex-1 px-6 md:px-24 lg:px-60 xl:px-[300px] 2xl:px-[30vw] py-16 pt-20 lg:pt-40 w-full bg-gradient-to-b from-zinc-950 via-black to-black text-zinc-400">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
