import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nishkarsh Varshney | Software Developer",
  description:
    "Portfolio of Nishkarsh Varshney, a software developer focused on backend systems, full-stack development, APIs and distributed systems.",
  keywords: [
    "Nishkarsh Varshney",
    "Software Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Distributed Systems",
    "Node.js",
    "TypeScript",
    "BullMQ",
    "Redis",
    "PostgreSQL",
    "Docker"
  ],
  authors: [{ name: "Nishkarsh Varshney", url: "https://github.com/Nishkarshhhhh" }],
  creator: "Nishkarsh Varshney",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nishkarshvarshney.dev",
    title: "Nishkarsh Varshney | Software Developer",
    description:
      "Software Developer focused on backend systems, full-stack applications, APIs, and distributed architectures.",
    siteName: "Nishkarsh Varshney Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishkarsh Varshney | Software Developer",
    description:
      "Portfolio of Nishkarsh Varshney, a software developer focused on backend systems, full-stack development, APIs and distributed systems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-[#080b11] text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-300">
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-grid-pattern">
          {/* Subtle top ambient glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-500/5 blur-[120px] -z-10 rounded-full" />
          <Navbar />
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
