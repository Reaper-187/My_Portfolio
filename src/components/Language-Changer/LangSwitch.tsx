import { Label } from "@/components/ui/label";
import engSvg from "@/assets/flag-svgs/en.svg";
import gerSvg from "@/assets/flag-svgs/ger.svg";
import { useTranslation } from "react-i18next";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import "./LangSwtich.sass";

export const LangSwitch = () => {
  const { t, i18n } = useTranslation("navbar");

  const languages = [
    { code: "en", lang: t("languages.english"), icon: engSvg },
    { code: "de", lang: t("languages.german"), icon: gerSvg },
  ];

  return (
    <RadioGroup
      value={i18n.language}
      onValueChange={(lng) => i18n.changeLanguage(lng)}
      className="lang-switch"
    >
      {languages.map((lang) => (
        <Label
          key={lang.code}
          htmlFor={`lang-${lang.code}`}
          className="lang-option"
        >
          <RadioGroupItem value={lang.code} id={`lang-${lang.code}`} />
          <img src={lang.icon} alt={lang.lang} className="lang-flag" />
          <span className="lang-label">{lang.lang}</span>
        </Label>
      ))}
    </RadioGroup>
  );
};
