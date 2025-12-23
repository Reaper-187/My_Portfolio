import { ArrowUpCircle } from "lucide-react";
import { SocialMedia } from "../social-media/SocialMedia";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import "./Footer.sass";

export const FooterSection = () => {
  return (
    <>
      <div className="divider" />
      <div className="footer-wrapper">
        <div className="footer-socials space-y-5">
          <h2>Abdulkader Cheikhkamis</h2>
          <p>Junior Frontend-Developer but Fullstack coming soon 😊</p>
          <SocialMedia />
        </div>

        <ul className="link-wrapper space-y-3">
          <Label className="link-label">Quick Links :</Label>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about-me">About</a>
            Me
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="divider" />
      <div className="signature">
        <p className="text-white/30">©️ 2025 Abdulkader Cheikhkamis</p>
        <Button onClick={() => window.scrollTo(0, 0)}>
          back to Top <ArrowUpCircle />
        </Button>
      </div>
    </>
  );
};
