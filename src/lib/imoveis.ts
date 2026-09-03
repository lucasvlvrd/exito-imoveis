import { IMOVEIS_MOCK } from "@/data/imoveis.mock";
import type { FiltrosImovel, Imovel } from "@/lib/types";

/**
 * Camada de acesso a dados dos imóveis. Hoje lê do fixture local
 * (`data/imoveis.mock.ts`); quando o backend expuser `GET /imoveis`,
 * trocar o corpo destas funções por `fetch()` sem mudar quem as chama.
 */

function aplicarFiltros(imoveis: Imovel[], filtros?: FiltrosImovel): Imovel[] {
  if (!filtros) return imoveis;

  return imoveis.filter((imovel) => {
    if (filtros.finalidade && imovel.finalidade !== filtros.finalidade) {
      return false;
    }
    if (filtros.tipo && imovel.tipo !== filtros.tipo) {
      return false;
    }
    if (filtros.bairro && imovel.bairro !== filtros.bairro) {
      return false;
    }
    if (filtros.quartos && (imovel.quartos ?? 0) < filtros.quartos) {
      return false;
    }
    if (filtros.precoMin && imovel.preco < filtros.precoMin) {
      return false;
    }
    if (filtros.precoMax && imovel.preco > filtros.precoMax) {
      return false;
    }
    return true;
  });
}

export async function getImoveis(filtros?: FiltrosImovel): Promise<Imovel[]> {
  const ativos = IMOVEIS_MOCK.filter((imovel) => imovel.ativo);
  return aplicarFiltros(ativos, filtros);
}

export async function getImovelById(id: string): Promise<Imovel | null> {
  return IMOVEIS_MOCK.find((imovel) => imovel.id === id) ?? null;
}

export async function getImoveisDestaque(limite = 4): Promise<Imovel[]> {
  const destaques = IMOVEIS_MOCK.filter(
    (imovel) => imovel.ativo && imovel.destaque,
  );
  return destaques.slice(0, limite);
}

export function getBairrosDisponiveis(): string[] {
  return Array.from(new Set(IMOVEIS_MOCK.map((imovel) => imovel.bairro))).sort();
}

export function formatarPreco(preco: number, finalidade: Imovel["finalidade"]): string {
  const valor = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(preco);

  return finalidade === "aluguel" ? `${valor}/mês` : valor;
}
