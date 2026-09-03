import type { Metadata } from "next";
import ContactForm from "@/components/contato/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a equipe da Êxito em Imóveis por telefone, WhatsApp, e-mail ou formulário.",
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
      <Reveal>
        <span className="text-xs tracking-[0.15em] text-muted-foreground">CONTATO</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Fale conosco</h1>
        <p className="mt-4 max-w-lg text-sm text-muted-foreground">
          Nos diga sua necessidade - comprar, alugar ou anunciar seu imóvel - e nossa equipe lhe contatará o quanto antes.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Reveal delay={0.1} className="order-2 space-y-6 lg:order-1">
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

          <div>
            <span className="text-xs tracking-[0.1em] text-muted-foreground">TELEFONE</span>
            <a href={`tel:${site.phone.tel}`} className="mt-1 block text-lg hover:text-muted-foreground">
              {site.phone.display}
            </a>
          </div>

          <div>
            <span className="text-xs tracking-[0.1em] text-muted-foreground">E-MAIL</span>
            <a href={`mailto:${site.email}`} className="mt-1 block text-lg hover:text-muted-foreground">
              {site.email}
            </a>
          </div>

          <div>
            <span className="text-xs tracking-[0.1em] text-muted-foreground">ENDEREÇO</span>
            <p className="mt-1 text-sm text-muted-foreground">{site.address.full}</p>
          </div>

          <p className="border-t border-border pt-4 text-xs text-muted-foreground">
            {site.creci}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
