import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <span className="text-xs tracking-[0.15em] text-muted-foreground">ERRO 404</span>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">Página não encontrada</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        O imóvel ou a página que você procura não existe ou foi removida.
      </p>
      <Link
        href="/catalogo"
        className="mt-8 inline-block border border-foreground px-8 py-3 text-xs tracking-[0.12em] transition-colors hover:bg-foreground hover:text-background"
      >
        VER CATÁLOGO
      </Link>
    </div>
  );
}
