"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/layout/Logo";
import MenuOverlay from "@/components/layout/MenuOverlay";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10">
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setIsMenuOpen(true)}
            className="flex h-8 w-8 flex-col items-start justify-center gap-[5px] cursor-pointer"
          >
            <span className="h-px w-6 bg-foreground transition-all" />
            <span className="h-px w-6 bg-foreground transition-all" />
          </button>

          <Logo />

          <nav className="flex items-center gap-4 text-[11px] tracking-[0.08em] text-foreground sm:gap-6 sm:text-xs">
            <Link href="/catalogo" className="hidden hover:text-muted-foreground sm:inline">
              CATÁLOGO
            </Link>
            <Link href="/contato" className="hover:text-muted-foreground">
              CONTATO
            </Link>
          </nav>
        </div>
      </header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
