import { AboutMe } from "@/components/About-Me/AboutMe";
import { ContactSection } from "@/components/Contact-Section/ContactSection";
import { FooterSection } from "@/components/Footer-Section/FooterSection";
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
      <AboutMe />
      {/* <SkillSection /> */}
      <ContactSection />
      <FooterSection />
    </>
  );
};
