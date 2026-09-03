"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Sem endpoint de contato no backend ainda: troca este stub por um POST
    // real quando existir (ver proposta de integração da Opção B/C).
    setEnviando(true);
    window.setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
    }, 600);
  }

  if (enviado) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="border border-border bg-muted px-6 py-10 text-center"
      >
        <p className="font-display text-2xl">Obrigado pelo contato.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Nossa equipe volta a falar com você em breve.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nome" className="mb-1.5 block text-xs text-muted-foreground">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          className="w-full border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
          />
        </div>
        <div>
          <label htmlFor="telefone" className="mb-1.5 block text-xs text-muted-foreground">
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            className="w-full border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-xs text-muted-foreground">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          className="w-full border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
        />
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="cursor-pointer border border-foreground px-8 py-3 text-xs tracking-[0.12em] transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-50"
      >
        {enviando ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
      </button>
    </form>
  );
}
