import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import deNavbar from "../locales/de/navbar.json";
import enNavbar from "../locales/en/navbar.json";
import deHero from "../locales/de/hero.json";
import enHero from "../locales/en/hero.json";
import deProjects from "../locales/de/projects.json";
import enProjects from "../locales/en/projects.json";
import deAbout from "../locales/de/about.json";
import enAbout from "../locales/en/about.json";
import deContact from "../locales/de/contact.json";
import enContact from "../locales/en/contact.json";
import deSkills from "../locales/de/skills.json";
import enSkills from "../locales/en/skills.json";
import deFooter from "../locales/de/footer.json";
import enFooter from "../locales/en/footer.json";

const resources = {
  en: {
    navbar: enNavbar,
    hero: enHero,
    projects: enProjects,
    about: enAbout,
    skills: enSkills,
    contact: enContact,
    footer: enFooter,
  },
  de: {
    navbar: deNavbar,
    hero: deHero,
    projects: deProjects,
    about: deAbout,
    skills: deSkills,
    contact: deContact,
    footer: deFooter,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["de", "en"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
