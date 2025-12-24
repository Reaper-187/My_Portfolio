import { Card } from "../ui/card";
import { InViewWrapper } from "../Animations/InViewWrapper";
import { SkillSection } from "../Skill-Section/SkillSection";
import { SectionWrapper } from "../Section-Comp/SectionWrapper";
import "./AboutMe.sass";

const aboutMeText = [
  {
    phrase: `I started my journey into development three years ago with a strong
        focus on frontend and clean UI. My interest in coding began at a young
        age and grew further through hands-on experience in a tech-driven work
        environment.`,
  },
  {
    phrase: `You will often find me debugging, refactoring, and improving        projects to
        make them more robust and maintainable. I thrive when working on
        meaningful and innovative products and I'm especially motivated by
        startup environments where ideas turn into real impact.`,
  },
];

export const AboutMe = () => {
  return (
    <SectionWrapper sectionId="about-me">
      <Card className="about-me-wrapper lg:space-y-10" id="about-me">
        <h1>About Me :</h1>
        {aboutMeText.map((text, index) => {
          const delayTime = index * 0.3;
          return (
            <InViewWrapper
              delay={delayTime}
              addClassName="about-me-text"
              threshHold={1}
              key={index}
            >
              <p>{text.phrase}</p>
            </InViewWrapper>
          );
        })}
        <SkillSection />
      </Card>
    </SectionWrapper>
  );
};
