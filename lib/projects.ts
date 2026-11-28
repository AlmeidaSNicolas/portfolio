import type { Lang } from "@/components/LanguageProvider";

// Shape of GET /api/projects on the PortfolioSync API (one language per response).
export type ApiProject = {
  repoName: string;
  title: string;
  description: string;
  stack: string[];
  htmlUrl: string;
  demoUrl: string | null;
  featured: boolean;
};

const REVALIDATE_SECONDS = 3600;
const TIMEOUT_MS = 60000; // the Render free plan can take up to ~50 s to wake up after idling

// Runs on the server only (called from app/page.tsx). Returns null when the API
// is not configured, unreachable, slow, or has no projects: the page then shows
// the static cards from i18n.
export async function getProjects(lang: Lang): Promise<ApiProject[] | null> {
  const baseUrl = process.env.PORTFOLIO_API_URL;
  if (!baseUrl) return null;

  try {
    const res = await fetch(`${baseUrl}/api/projects?lang=${lang}`, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) {
      console.warn(`PortfolioSync API answered ${res.status} for lang=${lang}`);
      return null;
    }
    const projects = (await res.json()) as ApiProject[];
    return projects.length > 0 ? projects : null;
  } catch (error) {
    console.warn(`PortfolioSync API unavailable for lang=${lang}`, error);
    return null;
  }
}
