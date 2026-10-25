import { useTranslation } from "react-i18next";
import {
  TechIcon,
  TechStackIcon,
} from "../TechStack/TechStackIcon/TechStackIcon";
import { Card } from "../ui/card";
import "./Skills.sass";
import { SectionWrapper } from "../Section-Comp/SectionWrapper";

export const SkillSection = () => {
  const { t } = useTranslation("skills");

  return (
    <SectionWrapper sectionId="skills">
      <Card className="skill-container">
        <div className="skill-intro">
          <h2>{t("heading")}</h2>
          <p>{t("intro")}</p>
          <p>{t("outro")}</p>
        </div>
        <div className="skill-split">
          <div className="skill-column">
            <h3>{t("categories.frontend")}</h3>
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

          <div className="divider" aria-hidden="true" />

          <div className="skill-column">
            <h3>{t("categories.backend")}</h3>
            <TechStackIcon
              stack={[
                TechIcon.NODE,
                TechIcon.EXPRESS,
                TechIcon.NESTJS,
                TechIcon.POSTGRESQL,
                TechIcon.MONGODB,
                TechIcon.PRISMA,
              ]}
            />
          </div>

          <div className="divider" aria-hidden="true" />

          <div className="skill-column">
            <h3>{t("categories.tools")}</h3>
            <TechStackIcon
              stack={[
                TechIcon.GIT,
                TechIcon.JEST,
                TechIcon.POSTMAN,
                TechIcon.VITE,
              ]}
            />
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
};
