import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Êxito em Imóveis, imobiliária em São Paulo com atendimento próximo em cada etapa da compra, locação e venda de imóveis.",
};

const VALORES = [
  {
    titulo: "Transparência",
    texto: "Documentação verificada e condições claras antes de qualquer negociação.",
  },
  {
    titulo: "Proximidade",
    texto: "Um time que acompanha pessoalmente cada negociação, do início ao fim.",
  },
  {
    titulo: "Cuidado com o imóvel",
    texto: "Cada imóvel do catálogo passa por uma seleção criteriosa antes de chegar até você.",
  },
];

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-24">
      <Reveal>
        <span className="text-xs tracking-[0.15em] text-muted-foreground">SOBRE</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">
          Quem é a {site.name}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Somos uma imobiliária ({site.creci}) dedicada a tornar a compra,
          venda e locação de imóveis um processo simples e transparente.
          Selecionamos cada imóvel do nosso catálogo com cuidado e
          acompanhamos pessoalmente cada cliente, do primeiro contato à
          entrega das chaves.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
        {VALORES.map((valor, index) => (
          <Reveal key={valor.titulo} delay={index * 0.08}>
            <h2 className="font-display text-xl">{valor.titulo}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{valor.texto}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
