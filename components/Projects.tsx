"use client";

import { useLanguage } from "./LanguageProvider";
import { links } from "@/lib/links";
import type { ApiProject } from "@/lib/projects";

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children} ↗
    </a>
  );
}

// Same boxed tags on every card, the same style as the bot card.
function Stack({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="tags mono">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ApiCard({ project }: { project: ApiProject }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Stack items={project.stack} />
      <div className="card-links mono">
        <External href={project.htmlUrl}>GitHub</External>
        {project.demoUrl && <External href={project.demoUrl}>Demo</External>}
      </div>
    </article>
  );
}

type ApiProjects = {
  es: ApiProject[] | null;
  en: ApiProject[] | null;
};

export function Projects({ apiProjects }: { apiProjects: ApiProjects }) {
  const { lang, t } = useLanguage();
  const p = t.projects;
  // Every project from the API sits in the column next to the bot card.
  const fromApi = apiProjects[lang] ?? [];

  return (
    <section id="proyectos">
      <h2 className="section-title">
        <span>01 ·</span> {p.title}
      </h2>
      <div className="projects-panel">
        <div className="pulse" aria-hidden="true" />
        <div className="projects-grid">
          <div className="featured-pair">
            <article className="card card-featured">
              <div className="body">
                <span className="badge mono">{p.bot.badge}</span>
                <h3>{p.bot.title}</h3>
                <p>{p.bot.description}</p>
                <Stack items={["Java", "PostgreSQL", "Docker", "JDBC", "DeepL API"]} />
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

            <div className="featured-side">
              {fromApi.map((project) => (
                <ApiCard key={project.repoName} project={project} />
              ))}
            </div>
          </div>

          <article className="card">
            <h3>{p.claudinho.title}</h3>
            <p>{p.claudinho.description}</p>
            <Stack items={["Swift", "7 ★ en GitHub"]} />
            <div className="card-links mono">
              <External href={links.claudinhoRepo}>GitHub</External>
            </div>
          </article>

          <article className="card">
            <h3>{p.airport.title}</h3>
            <p>{p.airport.description}</p>
            <Stack items={["TypeScript", "Express", "SQLite"]} />
            <div className="card-links mono">
              <External href={links.airportRepo}>GitHub</External>
            </div>
          </article>

          <article className="card">
            <h3>{p.tiempo.title}</h3>
            <p>{p.tiempo.description}</p>
            <Stack items={["React", "TypeScript", "Docker"]} />
            <div className="card-links mono">
              <External href={links.tiempoApp}>tiempo-focus.vercel.app</External>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
