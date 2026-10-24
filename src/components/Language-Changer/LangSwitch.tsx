import { Label } from "@/components/ui/label";
import engSvg from "@/assets/flag-svgs/en.svg";
import gerSvg from "@/assets/flag-svgs/ger.svg";
import { useTranslation } from "react-i18next";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

type LangSwitchProps = {
  setFlex: boolean;
};

export const LangSwitch = ({ setFlex }: LangSwitchProps) => {
  const { t, i18n } = useTranslation("navbar");

  const languages = [
    {
      code: "en",
      lang: t("languages.english"),
      icon: engSvg,
    },
    {
      code: "de",
      lang: t("languages.german"),
      icon: gerSvg,
    },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const putFlex = setFlex ? "absolute top-0 right-0 flex p-2 z-10" : "";

  return (
    <RadioGroup
      value={i18n.language}
      onValueChange={changeLanguage}
      className={`w-fit ${putFlex}`}
    >
      {languages.map((lang) => (
        <Label
          key={lang.code}
          htmlFor={`lang-${lang.code}`}
          className="flex items-center cursor-pointer"
        >
          <RadioGroupItem value={lang.code} id={`lang-${lang.code}`} />

          <img src={lang.icon} className="w-1/6 ml-3" alt={lang.lang} />
          <span className="ml-3">{lang.lang}</span>
        </Label>
      ))}
    </RadioGroup>
  );
};
