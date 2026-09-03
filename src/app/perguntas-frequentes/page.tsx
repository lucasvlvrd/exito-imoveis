import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: "Dúvidas comuns sobre comprar, alugar e anunciar imóveis com a Êxito em Imóveis.",
};

const FAQ = [
  {
    pergunta: "Quais documentos preciso para comprar um imóvel?",
    resposta:
      "Em geral: RG, CPF, comprovante de renda e de residência. Se o imóvel for financiado, o banco pode solicitar documentos adicionais durante a análise de crédito.",
  },
  {
    pergunta: "Quanto tempo leva para aprovar um financiamento?",
    resposta:
      "O prazo varia por instituição financeira, mas costuma levar de algumas semanas a poucos meses entre a análise de crédito e a assinatura do contrato.",
  },
  {
    pergunta: "Quais taxas estão envolvidas em uma locação?",
    resposta:
      "Normalmente há o valor do aluguel, condomínio (quando aplicável), IPTU e, em alguns casos, seguro-fiança ou caução, conforme definido em contrato.",
  },
  {
    pergunta: "Como agendar uma visita a um imóvel?",
    resposta:
      "Basta entrar em contato pelo WhatsApp, telefone ou formulário de contato informando o imóvel de interesse — nossa equipe organiza o agendamento.",
  },
  {
    pergunta: "Posso negociar o valor anunciado?",
    resposta:
      "Sim. Toda proposta é levada ao proprietário para análise; nossa equipe intermedia a negociação em cada etapa.",
  },
  {
    pergunta: "Vocês cuidam da documentação da negociação?",
    resposta:
      "Sim, acompanhamos a verificação da documentação do imóvel e das partes envolvidas antes do fechamento do negócio.",
  },
  {
    pergunta: "Como funciona para anunciar meu imóvel?",
    resposta:
      "Entre em contato pelo formulário ou WhatsApp com os dados do imóvel. Nossa equipe avalia, organiza o anúncio e cuida do contato com interessados.",
  },
  {
    pergunta: "Vocês atendem outras cidades além de São Paulo?",
    resposta:
      "Nosso catálogo é focado em São Paulo. Entre em contato para verificar disponibilidade em outras regiões.",
  },
];

export default function PerguntasFrequentesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Reveal>
        <span className="text-xs tracking-[0.15em] text-muted-foreground">
          PERGUNTAS FREQUENTES
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Dúvidas comuns</h1>
        <p className="mt-4 max-w-lg text-sm text-muted-foreground">
          Não encontrou o que procurava?{" "}
          <Link href="/contato" className="underline underline-offset-2 hover:text-foreground">
            Fale com a gente
          </Link>
          .
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <FaqAccordion itens={FAQ} />
      </Reveal>
    </div>
  );
}
