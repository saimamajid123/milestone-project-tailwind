
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
  <main>
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <About />
  </main>
  );
}
