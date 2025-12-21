import { useInView } from "react-intersection-observer";
import { Card } from "../ui/card";
import "./AboutMe.sass";

const aboutMeText = [
  {
    phrase: `I started my journey into development three years ago with a strong
        focus on frontend and clean UI. My interest in coding began at a young
        age and grew further through hands-on experience in a tech-driven work
        environment.`,
  },
  {
    phrase: `You will often find me debugging, refactoring, and improving        projects to
        make them more robust and maintainable. I thrive when working on
        meaningful and innovative products and I'm especially motivated by
        startup environments where ideas turn into real impact.`,
  },
];

export const AboutMe = () => {
  const { ref: animaRef, inView: aboutMeVisible } = useInView({
    threshold: 1,
  });

  return (
    <Card ref={animaRef} className="about-me-wrapper">
      <h1>About Me :</h1>
      {aboutMeText.map((text, index) => {
        const delay = index * 0.3;
        return (
          <p
            className={`opacity-0 ${aboutMeVisible ? "about-me-text" : ""}`}
            style={{ "--delay": `${delay}s` } as React.CSSProperties}
            key={index}
          >
            {text.phrase}
          </p>
        );
      })}
    </Card>
  );
};
