import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { LangSwitch } from "../Language-Changer/LangSwitch";
import "./Navbar.sass";

export const Navbar = () => {
  const { t } = useTranslation("navbar");
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-desktop">
        <LangSwitch />
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
      </div>

      <button
        type="button"
        className="navbar-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? t("menu.close") : t("menu.open")}
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div id="mobile-menu" className="mobile-menu">
          <ul className="mobile-links">
            <li>
              <a href="#about-me" onClick={closeMenu}>
                {t("links.aboutMe")}
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                {t("links.projects")}
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                {t("links.skills")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                {t("links.contact")}
              </a>
            </li>
          </ul>
          <div className="mobile-lang">
            <LangSwitch />
          </div>
        </div>
      )}
    </nav>
  );
};
