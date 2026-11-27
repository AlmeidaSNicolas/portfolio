import type { Dictionary } from "./es";

export const en: Dictionary = {
  nav: {
    projects: "/projects",
    howItWorks: "/how-it-works",
    experience: "/experience",
    contact: "/contact",
  },
  hero: {
    status: "available · Laredo, Cantabria (Spain)",
    tagline:
      "Java backend developer. I build APIs and services that run in production, not just on localhost.",
    downloadCv: "Download CV",
    response: {
      role: "Backend Developer",
      experience: "1.5 years · Slever AI",
    },
  },
  projects: {
    title: "Projects",
    bot: {
      badge: "IN PRODUCTION",
      title: "Geopolitical news curation bot",
      description:
        "Plain Java, no frameworks. Monitors 14 international sources, filters by region and topic, translates with DeepL and posts to a public Telegram channel.",
      metricCaption: "news items filtered down to what matters, per run",
      viewChannel: "View channel",
      viewCode: "Code",
    },
    claudinho: {
      title: "Claudinho",
      description:
        "Native macOS menu bar app that shows what Claude Code is doing and how much usage is left.",
      meta: "Swift · 7 ★ on GitHub",
    },
    airport: {
      title: "Airport Backend",
      description:
        "Layered REST API for flights and aircraft, with JWT authentication and Bcrypt-hashed passwords.",
    },
    tiempo: {
      title: "Tiempo-Focus",
      description: "Pomodoro app with persistent tasks and timer.",
    },
  },
  howItWorks: {
    title: "How it gets here",
    intro:
      "A push to GitHub becomes a card on this site. This is the path, in order.",
    steps: [
      { title: "Push to GitHub", detail: "A commit in a repository tagged with the portfolio topic." },
      { title: "Webhook + HMAC", detail: "The API verifies the signature. No valid signature, it answers 401." },
      { title: "Unique delivery", detail: "Each delivery is recorded once. If GitHub resends it, it is ignored." },
      { title: "portfolio.json", detail: "The API reads the file and the repository metadata." },
      { title: "es/en validation", detail: "Title and description are required in Spanish and English." },
      { title: "PostgreSQL", detail: "Stored under the repository's GitHub id." },
      { title: "This site", detail: "The site reads /api/projects, cached for 1 hour (ISR)." },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "12/2024 – 06/2026",
        role: "Fullstack Developer · Slever AI",
        detail: "LLM-powered backends, microfrontends, stress testing",
      },
      {
        period: "2025",
        role: "Automation · UNIFAHE",
        detail: "enrollment 80% faster",
      },
      {
        period: "until 12/2028",
        role: "BSc in Software Engineering · Anhanguera",
        detail: "",
      },
    ],
  },
  contact: {
    title: "Let's talk",
  },
  langLabel: "Language",
};
