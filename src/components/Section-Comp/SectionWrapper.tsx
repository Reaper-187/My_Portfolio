import { type ReactNode } from "react";
import "./Section.sass";

type SectionProps = {
  sectionId: string;
  children: ReactNode | ReactNode[];
};

export const SectionWrapper = ({ sectionId, children }: SectionProps) => {
  return (
    <section id={sectionId} className="section-anchor">
      {children}
    </section>
  );
};
