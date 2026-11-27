import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const [es, en] = await Promise.all([getProjects("es"), getProjects("en")]);

  return (
    <div className="container">
      <Nav />
      <main>
        <Hero />
        <Projects apiProjects={{ es, en }} />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
