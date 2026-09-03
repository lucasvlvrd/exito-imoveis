"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Finalidade } from "@/lib/types";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  const [finalidade, setFinalidade] = useState<Finalidade>("venda");

  return (
    <section className="relative grid grid-cols-1 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-10 lg:py-0"
      >
        <motion.span
          variants={itemVariants}
          className="text-xs tracking-[0.2em] text-muted-foreground"
        >
          ÊXITO EM IMÓVEIS
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl"
        >
          Encontre o
          <br />
          próximo endereço certo
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-sm text-sm text-muted-foreground sm:text-base"
        >
          Apartamentos, casas e imóveis comerciais selecionados, com
          atendimento próximo do início ao fim do processo.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-2 flex gap-2" role="group" aria-label="Finalidade">
          <button
            type="button"
            onClick={() => setFinalidade("venda")}
            className={`cursor-pointer border px-5 py-2.5 text-xs tracking-[0.08em] transition-colors ${
              finalidade === "venda"
                ? "border-foreground bg-foreground text-background"
                : "border-border text-foreground hover:bg-muted"
            }`}
          >
            COMPRAR
          </button>
          <button
            type="button"
            onClick={() => setFinalidade("aluguel")}
            className={`cursor-pointer border px-5 py-2.5 text-xs tracking-[0.08em] transition-colors ${
              finalidade === "aluguel"
                ? "border-foreground bg-foreground text-background"
                : "border-border text-foreground hover:bg-muted"
            }`}
          >
            ALUGAR
          </button>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link
            href={`/catalogo?finalidade=${finalidade}`}
            className="mt-1 inline-block border border-foreground px-8 py-3 text-xs tracking-[0.12em] transition-colors hover:bg-foreground hover:text-background"
          >
            VER IMÓVEIS
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative min-h-[45vh] overflow-hidden lg:min-h-0"
      >
        <Image
          src="/main_menu_pic.png"
          alt="Imóvel em destaque da Êxito em Imóveis"
          fill
          priority
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
