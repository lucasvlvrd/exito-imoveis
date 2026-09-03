import type { FiltrosImovel, Finalidade, TipoImovel } from "@/lib/types";

const TIPOS: TipoImovel[] = ["Apartamento", "Casa", "Cobertura", "Terreno", "Comercial"];
const OPCOES_QUARTOS = [1, 2, 3, 4];

interface FilterSidebarProps {
  filtros: FiltrosImovel;
  bairros: string[];
  totalResultados: number;
  onChange: (filtros: FiltrosImovel) => void;
  className?: string;
}

export default function FilterSidebar({
  filtros,
  bairros,
  totalResultados,
  onChange,
  className = "",
}: FilterSidebarProps) {
  const categorias: { numero: string; label: string; tipo?: TipoImovel }[] = [
    { numero: "01", label: "Todos" },
    ...TIPOS.map((tipo, index) => ({
      numero: String(index + 2).padStart(2, "0"),
      label: tipo,
      tipo,
    })),
  ];

  const temFiltroAtivo = Boolean(
    filtros.finalidade || filtros.tipo || filtros.bairro || filtros.quartos,
  );

  return (
    <aside className={className}>
      <ul className="space-y-1">
        {categorias.map((categoria) => {
          const ativo = filtros.tipo === categoria.tipo;
          return (
            <li key={categoria.label}>
              <button
                type="button"
                onClick={() => onChange({ ...filtros, tipo: categoria.tipo })}
                className={`flex w-full cursor-pointer items-baseline gap-3 py-1.5 text-left text-sm transition-colors ${
                  ativo ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-xs">|{categoria.numero}|</span>
                <span className={ativo ? "font-medium" : ""}>
                  {categoria.label.toUpperCase()}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 border-t border-border pt-6">
        <p className="text-xs tracking-[0.1em] text-muted-foreground">FILTROS</p>

        <div className="mt-4 space-y-6">
          <div>
            <p className="mb-2 text-xs text-muted-foreground">Finalidade</p>
            <div className="flex gap-2">
              {(["venda", "aluguel"] as Finalidade[]).map((valor) => (
                <button
                  key={valor}
                  type="button"
                  onClick={() =>
                    onChange({
                      ...filtros,
                      finalidade: filtros.finalidade === valor ? undefined : valor,
                    })
                  }
                  className={`cursor-pointer border px-3 py-1.5 text-xs tracking-wide transition-colors ${
                    filtros.finalidade === valor
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  {valor === "venda" ? "Comprar" : "Alugar"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs text-muted-foreground" htmlFor="filtro-bairro">
              Bairro
            </label>
            <select
              id="filtro-bairro"
              value={filtros.bairro ?? ""}
              onChange={(event) =>
                onChange({ ...filtros, bairro: event.target.value || undefined })
              }
              className="w-full cursor-pointer border border-border bg-background px-3 py-2 text-sm"
            >
              <option value="">Todos os bairros</option>
              {bairros.map((bairro) => (
                <option key={bairro} value={bairro}>
                  {bairro}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="mb-2 text-xs text-muted-foreground">Quartos (mín.)</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onChange({ ...filtros, quartos: undefined })}
                className={`cursor-pointer border px-3 py-1.5 text-xs transition-colors ${
                  !filtros.quartos
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:bg-muted"
                }`}
              >
                Qualquer
              </button>
              {OPCOES_QUARTOS.map((quartos) => (
                <button
                  key={quartos}
                  type="button"
                  onClick={() => onChange({ ...filtros, quartos })}
                  className={`cursor-pointer border px-3 py-1.5 text-xs transition-colors ${
                    filtros.quartos === quartos
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  {quartos}+
                </button>
              ))}
            </div>
          </div>
        </div>

        {temFiltroAtivo && (
          <button
            type="button"
            onClick={() => onChange({})}
            className="mt-6 cursor-pointer text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
          >
            Limpar filtros
          </button>
        )}
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        {totalResultados} {totalResultados === 1 ? "imóvel encontrado" : "imóveis encontrados"}
      </p>
    </aside>
  );
}
