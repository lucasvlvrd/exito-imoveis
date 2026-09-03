import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Compra, locação, avaliação e anúncio de imóveis com a Êxito em Imóveis — acompanhamento completo em cada etapa.",
};

const SERVICOS = [
  {
    titulo: "Compra",
    texto:
      "Ajudamos a encontrar o imóvel certo dentro do seu orçamento, com documentação verificada antes de qualquer proposta.",
    cta: { label: "Ver imóveis à venda", href: "/catalogo?finalidade=venda" },
  },
  {
    titulo: "Locação",
    texto:
      "Contratos claros e acompanhamento em cada etapa da locação, do interesse inicial até a entrega das chaves.",
    cta: { label: "Ver imóveis para alugar", href: "/catalogo?finalidade=aluguel" },
  },
  {
    titulo: "Avaliação de imóveis",
    texto:
      "Análise de mercado para você entender o valor real do seu imóvel antes de vender ou alugar.",
    cta: { label: "Solicitar avaliação", href: "/contato" },
  },
  {
    titulo: "Anúncio de imóvel",
    texto:
      "Se você quer vender ou alugar, cuidamos da divulgação e do contato com interessados do início ao fim.",
    cta: { label: "Anunciar meu imóvel", href: "/contato" },
  },
];

export default function ServicosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <Reveal>
        <span className="text-xs tracking-[0.15em] text-muted-foreground">SERVIÇOS</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">O que fazemos por você</h1>
        <p className="mt-4 max-w-lg text-sm text-muted-foreground">
          Do primeiro contato à entrega das chaves, cuidamos de cada etapa do
          processo de comprar, alugar ou anunciar um imóvel.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        {SERVICOS.map((servico, index) => (
          <Reveal
            key={servico.titulo}
            delay={index * 0.08}
            className="border-t border-border pt-6"
          >
            <h2 className="font-display text-2xl">{servico.titulo}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{servico.texto}</p>
            <Link
              href={servico.cta.href}
              className="mt-5 inline-block text-xs tracking-[0.1em] text-foreground hover:text-muted-foreground"
            >
              {servico.cta.label.toUpperCase()} →
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
