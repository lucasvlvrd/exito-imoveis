import Link from "next/link";
import { notFound } from "next/navigation";
import PropertyImagePlaceholder from "@/components/ui/PropertyImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import StickyContactBar from "@/components/imovel/StickyContactBar";
import { formatarPreco, getImovelById } from "@/lib/imoveis";

export async function generateMetadata({ params }: PageProps<"/imovel/[id]">) {
  const { id } = await params;
  const imovel = await getImovelById(id);

  if (!imovel) return { title: "Imóvel não encontrado" };

  return {
    title: `${imovel.titulo} — ${imovel.bairro}, ${imovel.cidade}`,
    description: imovel.descricao,
  };
}

export default async function ImovelPage({ params }: PageProps<"/imovel/[id]">) {
  const { id } = await params;
  const imovel = await getImovelById(id);

  if (!imovel) notFound();

  const atributos = [
    { label: "Quartos", valor: imovel.quartos },
    { label: "Banheiros", valor: imovel.banheiros },
    { label: "Vagas", valor: imovel.vagas },
    { label: "Área", valor: imovel.areaM2 ? `${imovel.areaM2} m²` : undefined },
  ].filter((atributo) => atributo.valor !== undefined);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 pb-24 sm:px-10 sm:pb-12">
      <Link
        href="/catalogo"
        className="text-xs tracking-[0.1em] text-muted-foreground hover:text-foreground"
      >
        ← VOLTAR AO CATÁLOGO
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <PropertyImagePlaceholder seed={imovel.fotoSeed} className="aspect-[4/5] w-full" />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs tracking-[0.15em] text-muted-foreground">
            {imovel.finalidade === "venda" ? "VENDA" : "ALUGUEL"} · {imovel.tipo.toUpperCase()}
          </span>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">{imovel.titulo}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {imovel.endereco}, {imovel.numero} — {imovel.bairro}, {imovel.cidade}/{imovel.uf}
          </p>
          <p className="mt-6 text-2xl">{formatarPreco(imovel.preco, imovel.finalidade)}</p>

          {atributos.length > 0 && (
            <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-6 text-sm sm:grid-cols-4">
              {atributos.map((atributo) => (
                <div key={atributo.label}>
                  <dt className="text-muted-foreground">{atributo.label}</dt>
                  <dd className="mt-1">{atributo.valor}</dd>
                </div>
              ))}
            </dl>
          )}

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {imovel.descricao}
          </p>

          <Link
            href="/contato"
            className="mt-8 inline-block border border-foreground px-8 py-3 text-xs tracking-[0.12em] transition-colors hover:bg-foreground hover:text-background"
          >
            TENHO INTERESSE
          </Link>
        </Reveal>
      </div>

      <StickyContactBar imovelTitulo={imovel.titulo} />
    </div>
  );
}
