import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <div className="max-w-4xl mx-auto px-6" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-surface-light to-transparent" />
      </div>
      <Skills />
      <div className="max-w-4xl mx-auto px-6" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-surface-light to-transparent" />
      </div>
      <Experience />
      <Education />
    </>
  );
}
