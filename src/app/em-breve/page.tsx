import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Em breve",
  robots: { index: false, follow: false },
};

export default function EmBrevePage() {
  const whatsappHref = `${site.whatsapp.href}?text=${encodeURIComponent(
    "Olá! Vi que o site está em construção e gostaria de falar sobre um imóvel.",
  )}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-6 py-16 text-center">
      <Image src="/logo.png" alt="Êxito em Imóveis" width={837} height={270} priority className="h-14 w-auto sm:h-16" />

      <div className="flex flex-col gap-4">
        <span className="text-xs tracking-[0.2em] text-muted-foreground">
          NOVO SITE A CAMINHO
        </span>
        <h1 className="font-display text-3xl leading-[1.15] sm:text-4xl">
          Estamos preparando
          <br />
          uma nova experiência
        </h1>
        <p className="mx-auto max-w-sm text-sm text-muted-foreground sm:text-base">
          Em breve você poderá conhecer nossos imóveis por aqui. Enquanto
          isso, fale direto com a nossa equipe.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-foreground bg-foreground px-8 py-3 text-xs tracking-[0.12em] text-background transition-colors hover:bg-transparent hover:text-foreground"
        >
          FALAR NO WHATSAPP
        </a>
        <a
          href={`tel:${site.phone.tel}`}
          className="inline-block border border-foreground px-8 py-3 text-xs tracking-[0.12em] transition-colors hover:bg-foreground hover:text-background"
        >
          {site.phone.display}
        </a>
      </div>

      <div className="flex flex-col gap-1 text-xs text-muted-foreground">
        <span>{site.email}</span>
        <span>{site.address.full}</span>
        <span>{site.creci}</span>
      </div>
    </main>
  );
}
