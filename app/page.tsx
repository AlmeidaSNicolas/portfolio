import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Globe } from "@/components/Globe";
import { Projects } from "@/components/Projects";
import { HowItWorks } from "@/components/HowItWorks";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const [es, en] = await Promise.all([getProjects("es"), getProjects("en")]);

  return (
    <>
      <Globe />
      <div className="container">
        <Nav />
        <main>
          <Hero />
          <Projects apiProjects={{ es, en }} />
          <HowItWorks />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}
