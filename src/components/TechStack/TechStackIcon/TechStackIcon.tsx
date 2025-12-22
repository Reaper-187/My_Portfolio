import js from "@/assets/dev_icons/js.svg";
import reactjs from "@/assets/dev_icons/reactjs.svg";
import nodejs from "@/assets/dev_icons/nodejs.svg";
import mongodb from "@/assets/dev_icons/mongodb.svg";
import express from "@/assets/dev_icons/express.svg";
import tailwind from "@/assets/dev_icons/tailwind.svg";
import sass from "@/assets/dev_icons/sass.svg";
import ts from "@/assets/dev_icons/ts.svg";
import "./TechIcon.sass";
import { InViewWrapper } from "@/components/Animations/InViewWrapper";

export enum TechIcon {
  JS = "js",
  REACT = "reactjs",
  NODE = "nodejs",
  MONGODB = "mongodb",
  EXPRESS = "express",
  TAILWIND = "tailwind",
  SASS = "sass",
  TS = "ts",
}

const iconMap: Record<TechIcon, string> = {
  [TechIcon.JS]: js,
  [TechIcon.REACT]: reactjs,
  [TechIcon.NODE]: nodejs,
  [TechIcon.MONGODB]: mongodb,
  [TechIcon.EXPRESS]: express,
  [TechIcon.TAILWIND]: tailwind,
  [TechIcon.SASS]: sass,
  [TechIcon.TS]: ts,
};

interface TechStackIconProps {
  stack: TechIcon[];
}

export const TechStackIcon = ({ stack }: TechStackIconProps) => {
  return (
    <div className="flex gap-4 flex-wrap p-3 md:p-0">
      {stack.map((tech, index) => {
        const delayTime = index * 0.3;
        return (
          <InViewWrapper
            delay={delayTime}
            addClassName="icons-visible"
            threshHold={1}
          >
            <img
              key={index}
              src={iconMap[tech]}
              alt={tech}
              className={`w-15 h-15 md:w-15 md:h-15 lg:w-18 lg:h-18 p-1 rounded-md bg-primary-foreground icon-img`}
            />
          </InViewWrapper>
        );
      })}
    </div>
  );
};
