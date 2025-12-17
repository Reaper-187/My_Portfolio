import { Card } from "../ui/card";
import "./AboutMe.sass";

export const AboutMe = () => {
  return (
    <Card className="about-me-wrapper">
      <h1>About Me :</h1>
      <p>
        I started my journey into development three years ago with a strong
        focus on frontend and clean UI. My interest in coding began at a young
        age and grew further through hands-on experience in a tech-driven work
        environment.
      </p>
      <p>
        You will often find me debugging, refactoring, and improving projects to
        make them more robust and maintainable. I thrive when working on
        meaningful and innovative products and I'm especially motivated by
        startup environments where ideas turn into real impact.
      </p>
    </Card>
  );
};
