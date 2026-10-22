import { ArrowUpCircle } from "lucide-react";
import { SocialMedia } from "../social-media/SocialMedia";
import { Button } from "../ui/button";
import "./Footer.sass";

export const FooterSection = () => {
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
          <p>Frontend-Developer but on the way to Fullstack 😊</p>
          <SocialMedia />
        </div>

        <ul className="link-wrapper">
          <li className="link-label">Quick Links :</li>
          <li>
            <a href="#home">Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-divider" />
      <div className="signature">
        <p className="signature-copyright">©️ 2026 Abdulkader Cheikhkamis</p>
        <Button className="back-to-top" onClick={scrollToTop}>
          back to Top <ArrowUpCircle />
        </Button>
      </div>
    </>
  );
};
