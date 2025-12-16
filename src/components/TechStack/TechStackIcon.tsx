import js from "@/assets/dev_icons/js.svg";
import reactjs from "@/assets/dev_icons/reactjs.svg";
import nodejs from "@/assets/dev_icons/nodejs.svg";
import mongodb from "@/assets/dev_icons/mongodb.svg";
import express from "@/assets/dev_icons/express.svg";
import tailwind from "@/assets/dev_icons/tailwind.svg";
import sass from "@/assets/dev_icons/sass.svg";
import ts from "@/assets/dev_icons/ts.svg";

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

export const TechStackIcon: React.FC<TechStackIconProps> = ({ stack }) => {
  return (
    <div className="grid grid-cols-3 gap-5 w-3/4">
      {stack.map((tech) => (
        <img
          key={tech}
          src={iconMap[tech]}
          alt={tech}
          className="bg-primary-foreground rounded-md p-1"
        />
      ))}
    </div>
  );
};
