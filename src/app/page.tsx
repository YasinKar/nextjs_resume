import BlurryDots from "@/components/BlurryDots";
import About from "@/components/About";
import ScrollShadow from "@/components/ScrollShadow";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Languages from "@/components/Languages";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main >
      <BlurryDots />
      <ScrollShadow>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Languages />
        <Contact />
      </ScrollShadow>
    </main >
  );
}