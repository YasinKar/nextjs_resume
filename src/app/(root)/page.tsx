import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Languages from "@/components/Languages";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Scroller from "@/components/Scroller";
import { fetchResume } from "@/lib/fetchResume";

export default async function Home() {
  const resume = await fetchResume();

  return (
    <main className="relative container">
      <Scroller>
        <About
          fullName={resume.fullName}
          profession={resume.profession}
          about={resume.about}
          github={resume.github}
          instagram={resume.instagram}
          likedin={resume.likedin}
          resumeFile={resume.resumeFile}
          telegram={resume.telegram}
        />
        <Skills skills={resume.skills} />
        <Experience experiences={resume.experiences} />
        <Projects projects={resume.projects} />
        <Education educations={resume.educations} />
        <Languages languages={resume.languages} />
        <Contact
          github={resume.github}
          instagram={resume.instagram}
          likedin={resume.likedin}
          telegram={resume.telegram}
          email={resume.email}
        />
      </Scroller>
    </main >
  );
}