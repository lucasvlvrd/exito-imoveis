import Link from "next/link";
import Logo from "@/components/layout/Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo className="h-12 sm:h-14" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Imóveis selecionados para comprar e alugar, com atendimento
            próximo do início ao fim do processo.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">{site.creci}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="mb-1 text-xs tracking-[0.1em] text-muted-foreground">
            IMÓVEIS
          </span>
          <Link href="/catalogo?finalidade=venda" className="hover:text-muted-foreground">
            Comprar
          </Link>
          <Link href="/catalogo?finalidade=aluguel" className="hover:text-muted-foreground">
            Alugar
          </Link>
          <Link href="/catalogo" className="hover:text-muted-foreground">
            Ver catálogo
          </Link>
          <Link href="/servicos" className="hover:text-muted-foreground">
            Serviços
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="mb-1 text-xs tracking-[0.1em] text-muted-foreground">
            ÊXITO EM IMÓVEIS
          </span>
          <Link href="/sobre" className="hover:text-muted-foreground">
            Sobre
          </Link>
          <Link href="/localizacao" className="hover:text-muted-foreground">
            Localização
          </Link>
          <Link href="/perguntas-frequentes" className="hover:text-muted-foreground">
            Perguntas frequentes
          </Link>
          <Link href="/contato" className="hover:text-muted-foreground">
            Contato
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="mb-1 text-xs tracking-[0.1em] text-muted-foreground">
            CONTATO
          </span>
          <a href={`tel:${site.phone.tel}`} className="hover:text-muted-foreground">
            {site.phone.display}
          </a>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted-foreground"
          >
            WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-muted-foreground">
            {site.email}
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-border px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</span>
        <Link href="/politica-de-privacidade" className="hover:text-foreground">
          Política de Privacidade
        </Link>
      </div>
    </footer>
  );
}
