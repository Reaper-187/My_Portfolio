import js from "@/assets/dev_icons/js.svg";
import reactjs from "@/assets/dev_icons/reactjs.svg";
import nodejs from "@/assets/dev_icons/nodejs.svg";
import mongodb from "@/assets/dev_icons/mongodb.svg";
import express from "@/assets/dev_icons/express.svg";
import tailwind from "@/assets/dev_icons/tailwind.svg";
import sass from "@/assets/dev_icons/sass.svg";
import ts from "@/assets/dev_icons/ts.svg";
import postgresql from "@/assets/dev_icons/postgresql.svg";
import nestjs from "@/assets/dev_icons/nestjs.svg";
import "./TechIcon.sass";
import { InViewWrapper } from "@/components/Animations/InViewWrapper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export enum TechIcon {
  JS = "js",
  REACT = "reactjs",
  NODE = "nodejs",
  MONGODB = "mongodb",
  EXPRESS = "express",
  TAILWIND = "tailwind",
  SASS = "sass",
  TS = "ts",
  POSTGRESQL = "postgresql",
  NESTJS = "nestjs",
}

const iconMap: Record<TechIcon, string> = {
  [TechIcon.JS]: js,
  [TechIcon.REACT]: reactjs,
  [TechIcon.NODE]: nodejs,
  [TechIcon.MONGODB]: mongodb,
  [TechIcon.POSTGRESQL]: postgresql,
  [TechIcon.NESTJS]: nestjs,
  [TechIcon.EXPRESS]: express,
  [TechIcon.TAILWIND]: tailwind,
  [TechIcon.SASS]: sass,
  [TechIcon.TS]: ts,
};

// Anzeigenamen für die Tooltips
const nameMap: Record<TechIcon, string> = {
  [TechIcon.JS]: "JavaScript",
  [TechIcon.REACT]: "React",
  [TechIcon.NODE]: "Node.js",
  [TechIcon.MONGODB]: "MongoDB",
  [TechIcon.EXPRESS]: "Express",
  [TechIcon.TAILWIND]: "Tailwind CSS",
  [TechIcon.SASS]: "Sass",
  [TechIcon.TS]: "TypeScript",
  [TechIcon.POSTGRESQL]: "PostgreSQL",
  [TechIcon.NESTJS]: "NestJS",
};

interface TechStackIconProps {
  stack: TechIcon[];
}

// Keys müssen exakt den Werten aus nameMap entsprechen
const colors: Record<string, string> = {
  JavaScript: "text-yellow-400",
  React: "text-blue-400",
  "Node.js": "text-green-300",
  MongoDB: "text-green-500",
  Express: "text-yellow-300",
  "Tailwind CSS": "text-blue-300",
  Sass: "text-pink-300",
  TypeScript: "text-blue-500",
  PostgreSQL: "text-indigo-300",
  NestJS: "text-red-300",
};

export const TechStackIcon = ({ stack }: TechStackIconProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex gap-4 flex-wrap p-3 md:p-0">
        {stack.map((tech, index) => {
          const delayTime = index * 0.3;
          return (
            <InViewWrapper
              delay={delayTime}
              addClassName="icons-visible"
              threshHold={1}
              key={index}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <img
                    src={iconMap[tech]}
                    alt={tech}
                    className={`w-15 h-15 md:w-15 md:h-15 lg:w-18 lg:h-18 p-1 rounded-md bg-primary-foreground icon-img`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p
                    className={`${colors[nameMap[tech]] ?? ""} bg-transparent text-md md:text-lg lg:text-xl`}
                  >
                    {nameMap[tech]}
                  </p>
                </TooltipContent>
              </Tooltip>
            </InViewWrapper>
          );
        })}
      </div>
    </TooltipProvider>
  );
};
