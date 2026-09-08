import type { Metadata } from "next";
import "./globals.css";
const inter = { variable: "" };
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, localBusinessSchema } from "@/lib/structuredData";
import { siteUrl, business } from "@/data/business";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} — Private Taxi & Tour Service from Govardhan`,
    template: `%s | ${business.name}`,
  },
  description:
    "Braj Travels offers private taxi and tour service from Govardhan, Mathura — complete AC car with driver for local sightseeing, Braj Darshan, outstation and Pan-India travel.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy-800 focus:shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
