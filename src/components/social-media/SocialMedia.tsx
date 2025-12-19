import { Github, Linkedin, Mail } from "lucide-react";

export const SocialMedia = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        className="cursor-pointer transition duration-300 hover:scale-[1.5]"
        href="https://www.linkedin.com/in/abdulkader-cheikhkamis-3a68a131a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin color="#4F46E5" />
      </a>
      <a
        className="cursor-pointer transition duration-300 hover:scale-[1.5]"
        href="https://github.com/Reaper-187"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github color="#4F46E5" />
      </a>
      <a
        className="cursor-pointer transition duration-300 hover:scale-[1.5]"
        href="mailto:abdulkader_cheik@outlook.de"
      >
        <Mail color="#4F46E5" />
      </a>
    </div>
  );
};
