import { FileDown } from "lucide-react";
import { SocialMedia } from "../social-media/SocialMedia";
import { Button } from "../ui/button";
import socialMediaImg from "../../assets/Cheik_SocialMedia.jpg";
import "./Hero.sass";

const Intro = () => {
  return (
    <div className="intro-container space-y-3 md:space-y-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[calistoga]">
        hi Abdul here. 👋
      </h1>

      <div className="space-y-5 text-sm md:text-base lg:text-lg lg:space-y-10">
        <p>
          Junior React Developer with a strong focus on frontend, excited by
          full-stack.
        </p>
        <p>
          My skills are hands-on and project-based. <br /> I aim to build real
          products in a startup environment and keep growing.
        </p>
      </div>

      <div className="flex gap-5">
        <Button className="cursor-pointer transition duration-300 hover:scale-[1.1]">
          Resumé
          <FileDown />
        </Button>
        <SocialMedia />
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <Intro />
      <div className="hero-image">
        <img src={socialMediaImg} alt="Profile-Img" />
      </div>
    </section>
  );
};
