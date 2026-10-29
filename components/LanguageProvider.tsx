"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { es, type Dictionary } from "@/i18n/es";
import { en } from "@/i18n/en";

export type Lang = "es" | "en";

const dictionaries: Record<Lang, Dictionary> = { es, en };
const STORAGE_KEY = "lang";

type LanguageContextValue = {
  lang: Lang;
  t: Dictionary;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // Restore the visitor's last choice; otherwise English browsers get English.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (saved === "es" || saved === "en") {
      setLangState(saved);
    } else if (navigator.language.toLowerCase().startsWith("en")) {
      setLangState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
