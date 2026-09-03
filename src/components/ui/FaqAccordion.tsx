interface FaqItem {
  pergunta: string;
  resposta: string;
}

interface FaqAccordionProps {
  itens: FaqItem[];
}

export default function FaqAccordion({ itens }: FaqAccordionProps) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {itens.map((item) => (
        <details key={item.pergunta} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm marker:content-none [&::-webkit-details-marker]:hidden sm:text-base">
            <span>{item.pergunta}</span>
            <span
              aria-hidden="true"
              className="shrink-0 text-lg text-muted-foreground transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {item.resposta}
          </p>
        </details>
      ))}
    </div>
  );
}
