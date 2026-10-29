import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="container">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
