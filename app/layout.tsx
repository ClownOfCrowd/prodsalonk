import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { Footer } from "@/components/layout/footer";
import { MobileBookCTA } from "@/components/layout/mobile-book-cta";
import { Navbar } from "@/components/layout/navbar";
import { getCurrentLocale } from "@/lib/i18n-server";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumiere Atelier | Premium Beauty Studio",
  description:
    "Portfolio website for a premium beauty studio focused on elevated self-care rituals and effortless online booking.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-svh bg-(--color-bg) text-(--color-text)">
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <MobileBookCTA locale={locale} />
        <CookieConsent locale={locale} />
      </body>
    </html>
  );
}
