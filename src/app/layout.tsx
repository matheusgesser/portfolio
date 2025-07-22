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
    icons: {
        icon: [
            {
                url: '/favicons/code-16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                url: '/favicons/code-32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/favicons/code-96.png',
                sizes: '96x96',
                type: 'image/png',
            },
        ],
    },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${geist.className} ${raleway.className} ${metrophobic.className} antialiased min-h-screen flex flex-col`}>
                <main className="grid grid-cols-[1fr_min(var(--max-article-width),calc(100%-var(--viewport-padding)*2))_1fr] gap-x-(--viewport-padding) py-18 px-2 lg:pt-40 w-full bg-gradient-to-b from-zinc-950 via-black to-black text-zinc-400">
                    <div className="col-start-2 w-full max-w-(--max-article-width)">
                        {children}
                    </div>
                </main>

                <Footer />
            </body>
        </html>
    );
}
