import { useTranslation } from "react-i18next";
import "./Navbar.sass";

export const Navbar = () => {
  const { t } = useTranslation("navbar");

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#about-me">{t("links.aboutMe")}</a>
        </li>
        <li>
          <a href="#projects">{t("links.projects")}</a>
        </li>
        <li>
          <a href="#skills">{t("links.skills")}</a>
        </li>
        <li>
          <a href="#contact">{t("links.contact")}</a>
        </li>
      </ul>
    </nav>
  );
};
