"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { IMOVEIS_MOCK } from "@/data/imoveis.mock";
import Logo from "@/components/layout/Logo";
import PropertyImagePlaceholder from "@/components/ui/PropertyImagePlaceholder";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_PRINCIPAL = [
  { label: "Comprar", href: "/catalogo?finalidade=venda" },
  { label: "Alugar", href: "/catalogo?finalidade=aluguel" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Contato", href: "/contato" },
];

const NAV_SECUNDARIA = [
  { numero: "01", label: "Comprar", href: "/catalogo?finalidade=venda" },
  { numero: "02", label: "Alugar", href: "/catalogo?finalidade=aluguel" },
  { numero: "03", label: "Lançamentos", href: "/catalogo?destaque=1" },
  { numero: "04", label: "Ver tudo", href: "/catalogo" },
];

const NAV_INSTITUCIONAL = [
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Localização", href: "/localizacao" },
  { label: "Perguntas frequentes", href: "/perguntas-frequentes" },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const destaques = IMOVEIS_MOCK.filter((imovel) => imovel.destaque).slice(0, 4);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-50 overflow-y-auto bg-background"
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10">
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M4 4 L20 20 M20 4 L4 20" strokeLinecap="round" />
              </svg>
            </button>

            <Logo onClick={onClose} />

            <nav className="flex items-center gap-4 text-[11px] tracking-[0.08em] sm:gap-6 sm:text-xs">
              <Link href="/catalogo" onClick={onClose} className="hover:text-muted-foreground">
                CATÁLOGO
              </Link>
              <Link href="/contato" onClick={onClose} className="hover:text-muted-foreground">
                CONTATO
              </Link>
            </nav>
          </div>

          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-8 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-6">
            <div>
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="space-y-2"
              >
                {NAV_PRINCIPAL.map((item) => (
                  <motion.li key={item.label} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="font-display text-4xl leading-tight tracking-tight hover:text-muted-foreground sm:text-5xl"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-xs tracking-[0.08em] text-muted-foreground"
              >
                {NAV_INSTITUCIONAL.map((item) => (
                  <motion.li key={item.label} variants={itemVariants}>
                    <Link href={item.href} onClick={onClose} className="hover:text-foreground">
                      {item.label.toUpperCase()}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs tracking-[0.12em] text-muted-foreground">
                  IMÓVEIS EM DESTAQUE
                </span>
              </div>

              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="mt-2 divide-y divide-border"
              >
                {NAV_SECUNDARIA.map((item) => (
                  <motion.li key={item.numero} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-baseline gap-4 py-3 text-sm hover:text-muted-foreground"
                    >
                      <span className="text-muted-foreground">|{item.numero}|</span>
                      <span className="tracking-wide">{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
              >
                {destaques.map((imovel) => (
                  <motion.div key={imovel.id} variants={itemVariants}>
                    <Link href={`/imovel/${imovel.id}`} onClick={onClose} className="group block">
                      <PropertyImagePlaceholder
                        seed={imovel.fotoSeed}
                        className="aspect-[3/4] w-full transition-opacity group-hover:opacity-80"
                      />
                      <p className="mt-2 text-xs tracking-wide text-muted-foreground">
                        {imovel.bairro}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
