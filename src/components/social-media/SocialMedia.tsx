import { Github, Linkedin, Mail } from "lucide-react";

export const SocialMedia = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        className="cursor-pointer"
        href="https://www.linkedin.com/in/abdulkader-cheikhkamis-3a68a131a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
      <a
        className="cursor-pointer"
        href="https://github.com/Reaper-187"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
      <a className="cursor-pointer" href="mailto:abdulkader_cheik@outlook.de">
        <Mail />
      </a>
    </div>
  );
};
