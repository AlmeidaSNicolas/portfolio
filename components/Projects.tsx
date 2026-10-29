"use client";

import { useLanguage } from "./LanguageProvider";
import { links } from "@/lib/links";

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children} ↗
    </a>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="proyectos">
      <h2 className="section-title">
        <span>01 ·</span> {p.title}
      </h2>
      <div className="projects-grid">
        <article className="card card-featured">
          <div className="body">
            <span className="badge mono">{p.bot.badge}</span>
            <h3>{p.bot.title}</h3>
            <p>{p.bot.description}</p>
            <div className="tags mono">
              <span>Java</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
              <span>JDBC</span>
              <span>DeepL API</span>
            </div>
            <div className="card-links mono">
              <External href={links.botChannel}>{p.bot.viewChannel}</External>
              <External href={links.botRepo}>{p.bot.viewCode}</External>
            </div>
          </div>
          <div className="metric mono">
            <strong>19.761 → 85</strong>
            <span>{p.bot.metricCaption}</span>
          </div>
        </article>

        <article className="card">
          <h3>{p.claudinho.title}</h3>
          <p>{p.claudinho.description}</p>
          <span className="card-meta mono">{p.claudinho.meta}</span>
          <div className="card-links mono">
            <External href={links.claudinhoRepo}>GitHub</External>
          </div>
        </article>

        <article className="card">
          <h3>{p.airport.title}</h3>
          <p>{p.airport.description}</p>
          <span className="card-meta mono">TypeScript · Express · SQLite</span>
          <div className="card-links mono">
            <External href={links.airportRepo}>GitHub</External>
          </div>
        </article>

        <article className="card">
          <h3>{p.tiempo.title}</h3>
          <p>{p.tiempo.description}</p>
          <span className="card-meta mono">React · TypeScript · Docker</span>
          <div className="card-links mono">
            <External href={links.tiempoApp}>tiempo-focus.vercel.app</External>
          </div>
        </article>

        <article className="card card-pending">
          <h3>{p.spring.title}</h3>
          <p>{p.spring.description}</p>
          <span className="card-meta mono">{p.spring.status}</span>
        </article>
      </div>
    </section>
  );
}
