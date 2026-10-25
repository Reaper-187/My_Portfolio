import { useTranslation } from "react-i18next";
import { ArrowUpCircle } from "lucide-react";
import { SocialMedia } from "../social-media/SocialMedia";
import { Button } from "../ui/button";
import "./Footer.sass";

export const FooterSection = () => {
  const { t } = useTranslation("footer");

  const scrollToTop = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="footer-divider" />
      <div className="footer-wrapper">
        <div className="footer-socials">
          <h2>Abdulkader Cheikhkamis</h2>
          <p>{t("tagline")}</p>
          <SocialMedia />
        </div>

        <ul className="link-wrapper">
          <li className="link-label">{t("quickLinks.label")}</li>
          <li>
            <a href="#about-me">{t("quickLinks.aboutMe")}</a>
          </li>
          <li>
            <a href="#projects">{t("quickLinks.projects")}</a>
          </li>
          <li>
            <a href="#skills">{t("quickLinks.skills")}</a>
          </li>
          <li>
            <a href="#contact">{t("quickLinks.contact")}</a>
          </li>
        </ul>
      </div>
      <div className="footer-divider" />
      <div className="signature">
        <p className="signature-copyright">{t("copyright")}</p>
        <Button className="back-to-top" onClick={scrollToTop}>
          {t("backToTop")} <ArrowUpCircle />
        </Button>
      </div>
    </>
  );
};
