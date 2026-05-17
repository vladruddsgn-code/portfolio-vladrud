import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-vladrud.vercel.app"),
  title: "Vlad Rudnitskyi — AI Filmmaker & Video Editor",
  description:
    "Portfolio of Vlad Rudnitskyi: AI filmmaker, video production specialist, and video editor creating cinematic films, edits, and visual AI work.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vlad Rudnitskyi — AI Filmmaker & Video Editor",
    description:
      "Selected AI filmmaking, video production, and video editing work by Vlad Rudnitskyi.",
    url: "/",
    siteName: "Vlad Rudnitskyi Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vlad Rudnitskyi — AI Filmmaker & Video Editor",
    description:
      "Selected AI filmmaking, video production, and video editing work by Vlad Rudnitskyi.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
