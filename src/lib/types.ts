export type Finalidade = "venda" | "aluguel";

export type TipoImovel =
  | "Apartamento"
  | "Casa"
  | "Cobertura"
  | "Terreno"
  | "Comercial";

/**
 * Mirrors the backend's `Imovel` dataclass (app/domain/imoveis/imovel.py)
 * for the shared fields, extended with the catalog fields a public listing
 * needs (preco, fotos, quartos, etc.) that don't exist there yet.
 */
export interface Imovel {
  id: string;
  titulo: string;
  tipo: TipoImovel;
  finalidade: Finalidade;
  preco: number;
  endereco: string;
  numero: string;
  complemento?: string | null;
  bairro: string;
  cidade: string;
  uf: string;
  cep?: string | null;
  quartos?: number;
  banheiros?: number;
  vagas?: number;
  areaM2?: number;
  descricao: string;
  fotoSeed: number;
  destaque?: boolean;
  ativo: boolean;
}

export interface FiltrosImovel {
  finalidade?: Finalidade;
  tipo?: TipoImovel;
  bairro?: string;
  quartos?: number;
  precoMin?: number;
  precoMax?: number;
}
