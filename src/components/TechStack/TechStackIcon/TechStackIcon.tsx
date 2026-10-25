import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
import prisma from "@/assets/dev_icons/prisma.svg";
import git from "@/assets/dev_icons/git.svg";
import postman from "@/assets/dev_icons/postman.svg";
import jest from "@/assets/dev_icons/jest.svg";
import vite from "@/assets/dev_icons/vite.svg";
import { InViewWrapper } from "@/components/Animations/InViewWrapper";
import "./TechIcon.sass";

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
  PRISMA = "prisma",
  GIT = "git",
  POSTMAN = "postman",
  JEST = "jest",
  VITE = "vite",
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
  [TechIcon.PRISMA]: prisma,
  [TechIcon.GIT]: git,
  [TechIcon.POSTMAN]: postman,
  [TechIcon.JEST]: jest,
  [TechIcon.VITE]: vite,
};

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
  [TechIcon.PRISMA]: "Prisma",
  [TechIcon.GIT]: "Git",
  [TechIcon.POSTMAN]: "Postman",
  [TechIcon.JEST]: "Jest",
  [TechIcon.VITE]: "Vite",
};

const colorMap: Record<TechIcon, string> = {
  [TechIcon.JS]: "tech-yellow-400",
  [TechIcon.REACT]: "tech-blue-400",
  [TechIcon.NODE]: "tech-green-300",
  [TechIcon.MONGODB]: "tech-green-500",
  [TechIcon.EXPRESS]: "tech-yellow-300",
  [TechIcon.TAILWIND]: "tech-blue-300",
  [TechIcon.SASS]: "tech-pink-300",
  [TechIcon.TS]: "tech-blue-500",
  [TechIcon.POSTGRESQL]: "tech-indigo-300",
  [TechIcon.NESTJS]: "tech-red-300",
  [TechIcon.PRISMA]: "tech-teal-300",
  [TechIcon.GIT]: "tech-orange-400",
  [TechIcon.POSTMAN]: "tech-orange-300",
  [TechIcon.JEST]: "tech-red-400",
  [TechIcon.VITE]: "tech-pruple-400",
};

interface TechStackIconProps {
  stack: TechIcon[];
}

export const TechStackIcon = ({ stack }: TechStackIconProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="tech-icon-list">
        {stack.map((tech, index) => {
          const delayTime = index * 0.3;
          return (
            <InViewWrapper
              delay={delayTime}
              addClassName="icons-visible"
              threshHold={1}
              key={tech}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="tech-icon-btn"
                    aria-label={nameMap[tech]}
                  >
                    <img
                      src={iconMap[tech]}
                      alt={nameMap[tech]}
                      className="tech-icon-img"
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className={`tech-tooltip ${colorMap[tech]}`}>
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
