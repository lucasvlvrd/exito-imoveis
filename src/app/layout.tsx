import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Compre e alugue imóveis com a Êxito em Imóveis — apartamentos, casas e imóveis comerciais selecionados, com atendimento próximo do início ao fim do processo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "imóveis",
    "comprar imóvel",
    "alugar imóvel",
    "apartamentos São Paulo",
    "imobiliária São Paulo",
    site.name,
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: site.name,
    description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description,
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const realEstateAgentJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.name,
  url: siteUrl,
  image: `${siteUrl}/logo.png`,
  telephone: site.phone.tel,
  email: site.email,
  identifier: site.creci,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: site.address.country,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
