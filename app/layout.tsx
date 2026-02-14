import type { Metadata } from "next";
import { Geist, Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: 'swap',
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hanken",
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-instrument-serif',
});


export const metadata: Metadata = {
  title: "Aayush Tirmanwar | Backend Developer & Systems Engineer",
  description:
    "Portfolio of Aayush Tirmanwar — Backend Developer specializing in scalable systems, microservices, real-time architectures, and AI-driven applications using Node.js, TypeScript, PostgreSQL, Redis, Kafka, and AWS.",
  
  keywords: [
    "Aayush Tirmanwar",
    "Backend Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Microservices Architecture",
    "Real-time Systems",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "AWS Developer",
    "Software Engineer Portfolio"
  ],

  authors: [{ name: "Aayush Tirmanwar" }],
  creator: "Aayush Tirmanwar",
  metadataBase: new URL("https://aayushtirmanwar.in"),

  openGraph: {
    title: "Aayush Tirmanwar | Backend Developer",
    description:
      "Building scalable backend systems, real-time platforms, and AI-powered applications.",
    url: "https://aayushtirmanwar.in",
    siteName: "Aayush Tirmanwar Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aayush Tirmanwar | Engineer | Backend Developer",
    description:
      "Scalable backend systems, real-time architecture, and AI applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
};


import SmoothScroll from "../components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${hankenGrotesk.variable} ${instrumentSerif.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
