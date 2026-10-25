import { FileDown } from "lucide-react";
import { SocialMedia } from "../social-media/SocialMedia";
import { Button } from "../ui/button";
import { SectionWrapper } from "../Section-Comp/SectionWrapper";
import socialMediaImg from "../../assets/Cheik_SocialMedia.jpg";
import myCv from "../../../public/CV_ABDULKADER_CHEIKHKAMIS_DEU.pdf";
import "./Hero.sass";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation("hero");
  return (
    <div className="intro-container">
      <h1 className="intro-heading">{t("greeting")}</h1>

      <div className="intro-text">
        <p>{t("intro.role")}</p>
        <p>
          {t("intro.approach")} <br /> {t("intro.goal")}
        </p>
      </div>

      <div className="intro-actions">
        <Button className="intro-button">
          <a href={myCv} download="CV_Abdulkader_Cheikhkamis.pdf">
            Resumé
          </a>
          <FileDown className="intro-button-icon" />
        </Button>
        <SocialMedia />
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <SectionWrapper sectionId="home">
      <div className="hero-wrapper">
        <Intro />
        <div className="hero-image">
          <img src={socialMediaImg} alt="Profile-Img" />
        </div>
      </div>
    </SectionWrapper>
  );
};
