import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { ReactNode } from "react";
import {
  Geist,
  Geist_Mono,
  Inter,
  Plus_Jakarta_Sans,
  Poppins,
  Montserrat,
} from "next/font/google";
import "../globals.css";
import { clashDisplay } from "../fonts";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});
const monsterrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LOCALES = ["en", "es"] as const;
type AppLocale = (typeof LOCALES)[number];

export async function generateStaticParams() {
  return LOCALES.map((l) => ({ locale: l }));
}

export const metadata = {
  title: "Meet Coin",
  description: "My App Description",
};

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${clashDisplay.variable} ${plusJakarta.variable} ${poppins.className} ${monsterrat.variable} antialiased bg-black`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
