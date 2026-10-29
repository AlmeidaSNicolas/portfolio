"use client";

import { useLanguage, type Lang } from "./LanguageProvider";

const LANGS: Lang[] = ["es", "en"];

export function Nav() {
  const { lang, t, setLang } = useLanguage();

  return (
    <nav className="nav mono">
      <a href="#" className="logo">
        ~/nicolas
      </a>
      <div className="nav-links">
        <a href="#proyectos">{t.nav.projects}</a>
        <a href="#experiencia">{t.nav.experience}</a>
        <a href="#contacto">{t.nav.contact}</a>
        <div className="lang-toggle" role="group" aria-label={t.langLabel}>
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
