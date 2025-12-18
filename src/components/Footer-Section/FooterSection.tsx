import { ArrowUpCircle } from "lucide-react";
import { SocialMedia } from "../social-media/SocialMedia";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import "./Footer.sass";

export const FooterSection = () => {
  return (
    <div>
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
            Me
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="divider" />
      <div className="signature">
        <p>©️ 2025 Abdulkader Cheikhkamis</p>
        <Button>
          back to the Top <ArrowUpCircle />
        </Button>
      </div>
    </div>
  );
};
