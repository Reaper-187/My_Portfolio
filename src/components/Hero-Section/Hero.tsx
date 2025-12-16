import { FileDown } from "lucide-react";
import { SocialMedia } from "../social-media/SocialMedia";
import "./Hero.sass";
import { Button } from "../ui/button";
import socialMediaImg from "../../assets/Cheik_SocialMedia.jpg";

const Intro = () => {
  return (
    <div>
      <div className="text-popover space-y-10">
        <h1 className="text-5xl font-[calistoga]">hi Abdul here. 👋</h1>

        <div className="text-lg space-y-10">
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
          <Button className="cursor-pointer">
            Resumé
            <FileDown />
          </Button>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <Intro />
      <div className="min-w-1/7 max-w-1/6">
        <img
          className="bg-red-500 rounded-lg"
          src={socialMediaImg}
          alt="Profile-Img"
        />
      </div>
    </section>
  );
};
