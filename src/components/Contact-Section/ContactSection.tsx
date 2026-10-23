import { Mail, MapPin } from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { FormContact } from "./From-Comp/FromContact";
import { InViewWrapper } from "../Animations/InViewWrapper";
import { SectionWrapper } from "../Section-Comp/SectionWrapper";
import "./Contact.sass";

export const ContactSection = () => {
  return (
    <SectionWrapper sectionId="contact">
      <div className="contact-section">
        <h3>Contact information</h3>
        <div className="contact-container">
          <div className="personal-info">
            <InViewWrapper
              delay={0.5}
              addClassName="personal-info-cards"
              threshHold={0.5}
            >
              <a
                href="mailto:abdulkader_cheik@outlook.de"
                className="info-link"
              >
                <Card className="info-card">
                  <Label className="info-label">
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
                className="info-link"
              >
                <Card className="info-card">
                  <Label className="info-label">
                    <MapPin color="#4F46E5" /> Location
                  </Label>
                  <p>Nürnberg, Germany</p>
                  <p>Open to remote opportunities</p>
                </Card>
              </a>
            </InViewWrapper>
          </div>

          <InViewWrapper
            delay={0.5}
            addClassName="contact-form"
            threshHold={0.5}
          >
            <FormContact />
          </InViewWrapper>
        </div>
      </div>
    </SectionWrapper>
  );
};
