import { Mail, MapPin } from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { FromContact } from "./From-Comp/FromContact";
import "./Contact.sass";

export const ContactSection = () => {
  return (
    <div className="contact-container space-y-5">
      <div className="personal-info w-full md:max-w-1/2 lg:w-1/4 space-y-5">
        <h3>Contact information</h3>

        <a href="mailto:abdulkader_cheik@outlook.de" className="block">
          <Card className="info-card">
            <Label className="w-fit">
              <Mail color="#4F46E5" />
              Email
            </Label>
            <p>abdulkader_cheik@outlook.de</p>
            <p>Send me an email anytime</p>
          </Card>
        </a>

        <a
          href="https://www.google.com/maps/place/N%C3%BCrnberg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="info-card">
            <Label className="w-fit">
              <MapPin color="#4F46E5" /> Location
            </Label>
            <p>Nürnberg, Germany</p>
            <p>Open to remote opportunities</p>
          </Card>
        </a>
      </div>

      <FromContact />
    </div>
  );
};
