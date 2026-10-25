import { useTranslation } from "react-i18next";
import { Card } from "../ui/card";
import { InViewWrapper } from "../Animations/InViewWrapper";
import { SectionWrapper } from "../Section-Comp/SectionWrapper";
import "./AboutMe.sass";

const PARAGRAPH_KEYS = [
  "paragraphs.origin",
  "paragraphs.workStyle",
  "paragraphs.drive",
] as const;

export const AboutMe = () => {
  const { t } = useTranslation("about");

  return (
    <SectionWrapper sectionId="about-me">
      <Card className="about-me-wrapper" id="about-me">
        <h1>{t("heading")}</h1>
        {PARAGRAPH_KEYS.map((key, index) => {
          const delayTime = index * 0.3;
          return (
            <InViewWrapper
              delay={delayTime}
              addClassName="about-me-text"
              threshHold={1}
              key={key}
            >
              <p>{t(key)}</p>
            </InViewWrapper>
          );
        })}
      </Card>
    </SectionWrapper>
  );
};
