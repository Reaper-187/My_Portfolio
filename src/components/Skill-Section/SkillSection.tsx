import { Tech, TechStack } from "../TechStack/TechStack";
import { TechIcon, TechStackIcon } from "../TechStack/TechStackIcon";
import { Card } from "../ui/card";
import "./Skills.sass";

export const SkillSection = () => {
  interface SkillSetInfoProps {
    techStack: string[];
  }

  const projectInfos: SkillSetInfoProps[] = [
    {
      techStack: [
        Tech.React,
        Tech.Node,
        Tech.Express,
        Tech.Rest,
        Tech.Tailwind,
        Tech.Mongo,
        Tech.TS,
      ],
    },
  ];

  return (
    <Card className="skill-container">
      <div className="about-me-wrapper">
        <h1>About Me :</h1>
        <p>
          I'm a self-taught junior React developer with a strong focus on
          frontend and clean UI. I build full-stack projects to understand the
          bigger picture and write maintainable code.
        </p>
        <br />
        <p>
          I learned by solving real problems — debugging, refactoring, and
          improving my projects iteratively.
        </p>
        <br />
        <p>
          I'm looking for a Company environment where I can learn fast,
          contribute early, and grow as a developer.
        </p>
      </div>
      <div className="skill-wrapper">
        <h1>Skills :</h1>
        <TechStackIcon
          stack={[
            TechIcon.REACT,
            TechIcon.NODE,
            TechIcon.JS,
            TechIcon.TAILWIND,
            TechIcon.EXPRESS,
            TechIcon.TS,
            TechIcon.MONGODB,
            TechIcon.SASS,
          ]}
        />
      </div>
    </Card>
  );
};
