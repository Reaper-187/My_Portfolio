import { TechIcon, TechStackIcon } from "../TechStack/TechStackIcon";
import { Card } from "../ui/card";
import "./Skills.sass";

export const SkillSection = () => {
  return (
    <Card className="skill-container">
      <div className="skill-split">
        <div>
          <h3>Frontend</h3>
          <TechStackIcon
            stack={[
              TechIcon.REACT,
              TechIcon.TS,
              TechIcon.JS,
              TechIcon.TAILWIND,
              TechIcon.SASS,
            ]}
          />
        </div>

        <div className="divider" />

        <div>
          <h3>Backend</h3>
          <TechStackIcon
            stack={[TechIcon.EXPRESS, TechIcon.NODE, TechIcon.MONGODB]}
          />
        </div>
      </div>
    </Card>
  );
};
