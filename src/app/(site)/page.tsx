import Link from "next/link";
import Hero from "@/components/home/Hero";
import TrustSignals from "@/components/home/TrustSignals";
import PropertyCard from "@/components/catalogo/PropertyCard";
import Reveal from "@/components/ui/Reveal";
import { getImoveisDestaque } from "@/lib/imoveis";

export default async function HomePage() {
  const destaques = await getImoveisDestaque(4);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <Reveal className="flex items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <span className="text-xs tracking-[0.15em] text-muted-foreground">
              SELEÇÃO
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Imóveis em destaque
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="hidden shrink-0 text-xs tracking-[0.1em] text-muted-foreground hover:text-foreground sm:inline"
          >
            VER CATÁLOGO COMPLETO
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {destaques.map((imovel, index) => (
            <Reveal key={imovel.id} delay={index * 0.06}>
              <PropertyCard imovel={imovel} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 sm:hidden">
          <Link
            href="/catalogo"
            className="inline-block text-xs tracking-[0.1em] text-muted-foreground hover:text-foreground"
          >
            VER CATÁLOGO COMPLETO
          </Link>
        </Reveal>
      </section>

      <TrustSignals />

      <section className="border-t border-border bg-muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 md:grid-cols-3">
          {[
            {
              titulo: "Comprar",
              texto:
                "Imóveis avaliados e selecionados, com toda a documentação verificada antes de chegar até você.",
              href: "/catalogo?finalidade=venda",
            },
            {
              titulo: "Alugar",
              texto:
                "Locação com contrato claro e acompanhamento em cada etapa, do interesse à entrega das chaves.",
              href: "/catalogo?finalidade=aluguel",
            },
            {
              titulo: "Atendimento",
              texto:
                "Time próximo, que acompanha cada negociação pessoalmente do início ao fim.",
              href: "/servicos",
            },
          ].map((item, index) => (
            <Reveal key={item.titulo} delay={index * 0.08}>
              <Link href={item.href} className="group block">
                <h3 className="font-display text-2xl group-hover:text-muted-foreground">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.texto}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center sm:px-10">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">
            Pronto para encontrar seu imóvel?
          </h2>
          <Link
            href="/catalogo"
            className="mt-8 inline-block border border-foreground px-10 py-3.5 text-xs tracking-[0.12em] transition-colors hover:bg-foreground hover:text-background"
          >
            VER CATÁLOGO
          </Link>
        </Reveal>
      </section>
    </>
  );
}
