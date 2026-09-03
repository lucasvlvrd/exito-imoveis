import { Suspense } from "react";
import type { Metadata } from "next";
import CatalogoView from "@/components/catalogo/CatalogoView";
import { getBairrosDisponiveis, getImoveis } from "@/lib/imoveis";

export const metadata: Metadata = {
  title: "Catálogo de imóveis",
  description: "Explore apartamentos, casas e imóveis comerciais para comprar ou alugar.",
};

export default async function CatalogoPage() {
  const imoveis = await getImoveis();
  const bairros = getBairrosDisponiveis();

  return (
    <Suspense fallback={null}>
      <CatalogoView imoveis={imoveis} bairros={bairros} />
    </Suspense>
  );
}
