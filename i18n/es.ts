// Spanish is the source of truth: en.ts must match this shape (see Dictionary).
export const es = {
  nav: {
    projects: "/proyectos",
    howItWorks: "/como-llega",
    experience: "/experiencia",
    contact: "/contacto",
  },
  hero: {
    status: "disponible · Laredo, Cantabria",
    tagline:
      "Desarrollador backend Java. Construyo APIs y servicios que funcionan en producción, no solo en local.",
    downloadCv: "Descargar CV",
    response: {
      role: "Backend Developer",
      experience: "1,5 años · Slever AI",
    },
  },
  projects: {
    title: "Proyectos",
    bot: {
      badge: "EN PRODUCCIÓN",
      title: "Bot de curaduría geopolítica",
      description:
        "Java puro, sin frameworks. Monitoriza 14 fuentes internacionales, filtra por región y tema, traduce con DeepL y publica en un canal público de Telegram.",
      metricCaption: "noticias filtradas a lo relevante, por ejecución",
      viewChannel: "Ver canal",
      viewCode: "Código",
    },
    claudinho: {
      title: "Claudinho",
      description:
        "App nativa de macOS que muestra en la barra de menú qué está haciendo Claude Code y cuánto uso queda.",
      meta: "Swift · 7 ★ en GitHub",
    },
    airport: {
      title: "Airport Backend",
      description:
        "API REST de vuelos y aeronaves en capas, con autenticación JWT y contraseñas cifradas con Bcrypt.",
    },
    tiempo: {
      title: "Tiempo-Focus",
      description: "App Pomodoro con persistencia de tareas y temporizador.",
    },
  },
  howItWorks: {
    title: "Cómo llega aquí",
    intro:
      "Un push en GitHub se convierte en una tarjeta en este sitio. Así es el camino, en orden.",
    steps: [
      { title: "Push en GitHub", detail: "Un commit en un repositorio con la topic portfolio." },
      { title: "Webhook + HMAC", detail: "La API valida la firma. Sin firma válida, responde 401." },
      { title: "Entrega única", detail: "Cada entrega se registra una vez. Si GitHub la reenvía, se ignora." },
      { title: "portfolio.json", detail: "La API lee el archivo y los metadatos del repositorio." },
      { title: "Validación es/en", detail: "Título y descripción obligatorios en español e inglés." },
      { title: "PostgreSQL", detail: "Se guarda con la clave del repositorio en GitHub." },
      { title: "Este sitio", detail: "El sitio lee /api/projects, con caché de 1 hora (ISR)." },
    ],
  },
  experience: {
    title: "Experiencia",
    items: [
      {
        period: "12/2024 – 06/2026",
        role: "Desarrollador Fullstack · Slever AI",
        detail: "backends con LLMs, microfrontends, pruebas de estrés",
      },
      {
        period: "2025",
        role: "Automatización · UNIFAHE",
        detail: "matrícula un 80% más rápida",
      },
      {
        period: "hasta 12/2028",
        role: "Grado en Ingeniería de Software · Anhanguera",
        detail: "",
      },
    ],
  },
  contact: {
    title: "¿Hablamos?",
  },
  langLabel: "Idioma",
};

export type Dictionary = typeof es;
