import Link from "next/link";
import { site } from "@/lib/site";

interface StickyContactBarProps {
  imovelTitulo: string;
}

export default function StickyContactBar({ imovelTitulo }: StickyContactBarProps) {
  const whatsappHref = `${site.whatsapp.href}?text=${encodeURIComponent(
    `Olá! Tenho interesse no imóvel "${imovelTitulo}".`,
  )}`;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-background px-4 py-3 sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 border border-foreground bg-foreground py-3 text-center text-xs tracking-[0.1em] text-background"
      >
        WHATSAPP
      </a>
      <Link
        href="/contato"
        className="flex-1 border border-foreground py-3 text-center text-xs tracking-[0.1em] text-foreground"
      >
        TENHO INTERESSE
      </Link>
    </div>
  );
}
