import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Localização",
  description: `Visite o escritório da Êxito em Imóveis: ${site.address.full}.`,
};

const mapQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.city} - ${site.address.state}, ${site.address.postalCode}`,
);

export default function LocalizacaoPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <Reveal>
        <span className="text-xs tracking-[0.15em] text-muted-foreground">LOCALIZAÇÃO</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Onde estamos</h1>
        <p className="mt-4 max-w-lg text-sm text-muted-foreground">
          Atendimento presencial mediante agendamento prévio pelo telefone ou WhatsApp.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal delay={0.1} className="space-y-6">
          <div>
            <span className="text-xs tracking-[0.1em] text-muted-foreground">ENDEREÇO</span>
            <p className="mt-1 text-lg">{site.address.street}</p>
            <p className="text-sm text-muted-foreground">
              CEP {site.address.postalCode} — {site.address.city}/{site.address.state}
            </p>
          </div>

          <div>
            <span className="text-xs tracking-[0.1em] text-muted-foreground">TELEFONE</span>
            <a href={`tel:${site.phone.tel}`} className="mt-1 block text-lg hover:text-muted-foreground">
              {site.phone.display}
            </a>
          </div>

          <div>
            <span className="text-xs tracking-[0.1em] text-muted-foreground">WHATSAPP</span>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-lg hover:text-muted-foreground"
            >
              {site.whatsapp.display}
            </a>
          </div>

          <p className="border-t border-border pt-4 text-xs text-muted-foreground">
            {site.creci}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="aspect-[4/3] w-full overflow-hidden border border-border sm:aspect-[16/9]">
          <iframe
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            title={`Mapa de localização — ${site.address.street}`}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </div>
  );
}
