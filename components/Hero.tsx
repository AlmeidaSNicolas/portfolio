"use client";

import { useLanguage } from "./LanguageProvider";
import { links } from "@/lib/links";

export function Hero() {
  const { lang, t } = useLanguage();
  const r = t.hero.response;

  return (
    <section className="hero">
      <div className="hero-text">
        <span className="status mono">{t.hero.status}</span>
        <h1>Nicolas Almeida</h1>
        <p className="tagline">{t.hero.tagline}</p>
        <div className="actions">
          <a className="btn btn-primary" href={links.cv} download>
            {t.hero.downloadCv}
          </a>
          <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="response mono" aria-hidden="true">
        <div className="response-head">GET /api/nicolas?lang={lang}</div>
        <pre>
          <span className="ok">HTTP/1.1 200 OK</span>
          {"\n{\n  "}
          <span className="key">&quot;role&quot;</span>
          {`: "${r.role}",\n  `}
          <span className="key">&quot;stack&quot;</span>
          {': ["Java 21", "Spring Boot",\n            "PostgreSQL", "Docker"],\n  '}
          <span className="key">&quot;experience&quot;</span>
          {`: "${r.experience}",\n  `}
          <span className="key">&quot;languages&quot;</span>
          {': ["es", "pt", "en"],\n  '}
          <span className="key">&quot;remote&quot;</span>
          {": true\n}"}
        </pre>
      </div>
    </section>
  );
}
