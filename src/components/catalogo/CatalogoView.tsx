"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FilterSidebar from "@/components/catalogo/FilterSidebar";
import PropertyCard from "@/components/catalogo/PropertyCard";
import Reveal from "@/components/ui/Reveal";
import type { FiltrosImovel, Finalidade, Imovel, TipoImovel } from "@/lib/types";

interface CatalogoViewProps {
  imoveis: Imovel[];
  bairros: string[];
}

export default function CatalogoView({ imoveis, bairros }: CatalogoViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);

  const filtros: FiltrosImovel = useMemo(
    () => ({
      finalidade: (searchParams.get("finalidade") as Finalidade | null) ?? undefined,
      tipo: (searchParams.get("tipo") as TipoImovel | null) ?? undefined,
      bairro: searchParams.get("bairro") ?? undefined,
      quartos: searchParams.get("quartos") ? Number(searchParams.get("quartos")) : undefined,
    }),
    [searchParams],
  );

  const imoveisFiltrados = useMemo(() => {
    return imoveis.filter((imovel) => {
      if (filtros.finalidade && imovel.finalidade !== filtros.finalidade) return false;
      if (filtros.tipo && imovel.tipo !== filtros.tipo) return false;
      if (filtros.bairro && imovel.bairro !== filtros.bairro) return false;
      if (filtros.quartos && (imovel.quartos ?? 0) < filtros.quartos) return false;
      return true;
    });
  }, [imoveis, filtros]);

  function handleChange(novosFiltros: FiltrosImovel) {
    const params = new URLSearchParams();
    if (novosFiltros.finalidade) params.set("finalidade", novosFiltros.finalidade);
    if (novosFiltros.tipo) params.set("tipo", novosFiltros.tipo);
    if (novosFiltros.bairro) params.set("bairro", novosFiltros.bairro);
    if (novosFiltros.quartos) params.set("quartos", String(novosFiltros.quartos));

    const query = params.toString();
    router.replace(query ? `/catalogo?${query}` : "/catalogo", { scroll: false });
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10">
      <div className="flex items-baseline justify-between gap-4 border-b border-border pb-6">
        <h1 className="font-display text-3xl sm:text-4xl">Catálogo</h1>
        <button
          type="button"
          onClick={() => setFiltrosAbertos((aberto) => !aberto)}
          className="cursor-pointer text-xs tracking-[0.1em] text-muted-foreground hover:text-foreground lg:hidden"
        >
          {filtrosAbertos ? "FECHAR" : "FILTROS"}
        </button>
      </div>

      <div className="grid gap-10 pt-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <FilterSidebar
          filtros={filtros}
          bairros={bairros}
          totalResultados={imoveisFiltrados.length}
          onChange={handleChange}
          className={`${filtrosAbertos ? "block" : "hidden"} lg:block`}
        />

        <div>
          {imoveisFiltrados.length === 0 ? (
            <p className="py-20 text-center text-sm text-muted-foreground">
              Nenhum imóvel encontrado com esses filtros.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
              {imoveisFiltrados.map((imovel, index) => (
                <Reveal key={imovel.id} delay={(index % 6) * 0.05}>
                  <PropertyCard imovel={imovel} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
