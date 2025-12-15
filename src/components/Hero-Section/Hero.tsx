import { FileDown } from "lucide-react";
import { SocialMedia } from "../social-media/SocialMedia";
import "./Hero.sass";
import { Button } from "../ui/button";

const Intro = () => {
  return (
    <div>
      <div className="text-popover space-y-5">
        <h1 className="text-5xl font-[calistoga]">hi Abdul here. 👋</h1>

        <div className="text-lg space-y-3 ">
          <p>
            Junior React Developer with a strong focus on frontend, full-stack
            by passion.
          </p>
          <p>
            My skills are hands‑on and project‑based. <br /> I aim to build real
            products in a startup environment and keep growing.
          </p>
        </div>

        <div className="flex gap-3">
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
      <div className="min-w-1/5 max-w-1/3">
        <img
          className="bg-red-500 rounded-lg"
          src="../Cheik_SocialMedia.jpg"
          alt="Profile-Img"
        />
      </div>
    </section>
  );
};
