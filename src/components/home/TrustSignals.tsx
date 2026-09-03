import { site } from "@/lib/site";

const SINAIS = [
  site.creci,
  "Atendimento direto com a equipe",
  "Documentação verificada",
  "Fale por WhatsApp",
];

export default function TrustSignals() {
  return (
    <div className="border-y border-border bg-background">
      <ul className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-3 px-6 py-6 text-xs tracking-[0.08em] text-muted-foreground sm:px-10">
        {SINAIS.map((sinal) => (
          <li key={sinal}>{sinal.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
}
