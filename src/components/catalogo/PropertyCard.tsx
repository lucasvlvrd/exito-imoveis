import Link from "next/link";
import PropertyImagePlaceholder from "@/components/ui/PropertyImagePlaceholder";
import { formatarPreco } from "@/lib/imoveis";
import type { Imovel } from "@/lib/types";

interface PropertyCardProps {
  imovel: Imovel;
}

export default function PropertyCard({ imovel }: PropertyCardProps) {
  return (
    <Link href={`/imovel/${imovel.id}`} className="group block">
      <div className="relative overflow-hidden">
        <PropertyImagePlaceholder
          seed={imovel.fotoSeed}
          className="aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {imovel.destaque && (
          <span className="absolute left-3 top-3 bg-background px-2 py-1 text-[10px] tracking-[0.1em] text-foreground">
            DESTAQUE
          </span>
        )}
        <span className="absolute right-3 top-3 bg-background/90 px-2 py-1 text-[10px] tracking-[0.1em] text-foreground">
          {imovel.finalidade === "venda" ? "VENDA" : "ALUGUEL"}
        </span>
      </div>

      <div className="mt-3 space-y-0.5">
        <p className="text-sm text-foreground">{imovel.titulo}</p>
        <p className="text-xs text-muted-foreground">
          {imovel.bairro}, {imovel.cidade}
        </p>
        <p className="pt-1 text-sm">{formatarPreco(imovel.preco, imovel.finalidade)}</p>
      </div>
    </Link>
  );
}
