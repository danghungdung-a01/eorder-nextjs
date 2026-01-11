import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Barlow } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Scrollup from "@/components/ScrollUp/Scrollup";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TNKAS: Esskultur neu erleben. Multimandanten-Plattform für vielfältige Geschmäcker und nahtlose Bestellungen bei Spitzenrestaurants. Abonnieren Sie und starten Sie Ihre einzigartige kulinarische Reise.",
  description: "TNKAS: Esskultur neu erleben. Multimandanten-Plattform für vielfältige Geschmäcker und nahtlose Bestellungen bei Spitzenrestaurants. Abonnieren Sie und starten Sie Ihre einzigartige kulinarische Reise.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
        <ThemeSwitcher />
        <Scrollup />
      </body>
    </html>
  );
}
