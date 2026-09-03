"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

type Consent = "accepted" | "rejected";

const STORAGE_KEY = "exito-cookie-consent";

const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function getSnapshot(): Consent | null {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "accepted" || stored === "rejected" ? stored : null;
}

function getServerSnapshot(): Consent | null {
  return null;
}

function setConsent(choice: Consent) {
  window.localStorage.setItem(STORAGE_KEY, choice);
  listeners.forEach((listener) => listener());
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <>
      {consent === "accepted" && <GoogleAnalytics />}

      <AnimatePresence>
        {consent === null && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-label="Aviso de cookies"
            className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background px-6 py-5 sm:px-10"
            style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
          >
            <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-xs text-muted-foreground sm:text-sm">
                Usamos cookies para melhorar sua experiência e entender como o
                site é utilizado. Você pode aceitar ou recusar a qualquer
                momento. Saiba mais na nossa{" "}
                <Link href="/politica-de-privacidade" className="underline underline-offset-2 hover:text-foreground">
                  Política de Privacidade
                </Link>
                .
              </p>
              <div className="flex shrink-0 gap-3">
                <button
                  type="button"
                  onClick={() => setConsent("rejected")}
                  className="cursor-pointer border border-border px-5 py-2.5 text-xs tracking-[0.1em] transition-colors hover:bg-muted"
                >
                  RECUSAR
                </button>
                <button
                  type="button"
                  onClick={() => setConsent("accepted")}
                  className="cursor-pointer border border-foreground bg-foreground px-5 py-2.5 text-xs tracking-[0.1em] text-background transition-colors hover:bg-transparent hover:text-foreground"
                >
                  ACEITAR
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
