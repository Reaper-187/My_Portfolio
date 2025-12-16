import { Hero } from "@/components/Hero-Section/Hero";
import { Navbar } from "@/components/Portfolio_Header/Navbar";
import { ProjectSection } from "@/components/Project-Section/ProjectSection";
import { SkillSection } from "@/components/Skill-Section/SkillSection";

export const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectSection />
      <SkillSection />
    </>
  );
};
