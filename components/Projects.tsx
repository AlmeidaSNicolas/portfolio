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

function ApiCard({ project, featured }: { project: ApiProject; featured: boolean }) {
  return (
    <article className={featured ? "card card-featured card-api" : "card"}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.stack.length > 0 && (
        <span className="card-meta mono">{project.stack.join(" · ")}</span>
      )}
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
  const fromApi = apiProjects[lang] ?? [];
  // "featured" in portfolio.json puts the project next to the bot, with the same highlight.
  const featuredFromApi = fromApi.filter((project) => project.featured);
  const regularFromApi = fromApi.filter((project) => !project.featured);

  return (
    <section id="proyectos">
      <h2 className="section-title">
        <span>01 ·</span> {p.title}
      </h2>
      <div className="projects-grid">
        <div className="featured-pair">
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

          {featuredFromApi.map((project) => (
            <ApiCard key={project.repoName} project={project} featured />
          ))}
        </div>

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

        {regularFromApi.map((project) => (
          <ApiCard key={project.repoName} project={project} featured={false} />
        ))}
      </div>
    </section>
  );
}
