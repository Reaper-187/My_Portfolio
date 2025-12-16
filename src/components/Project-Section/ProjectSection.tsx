import "./Project.sass";
import { Github, TestTubeDiagonal, type LucideProps } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import moneytrackerDark from "../../assets/moneytracker_imgs/moneytracker_dark.png";
import kanbanDark from "../../assets/kanban_imgs/kanban_dark.png";
import chatDark from "../../assets/chat_imgs/chat_dark.png";

interface ProjectInfoProps {
  title: string;
  dark_img?: string;
  description: string;
  testDemo: React.ComponentType<LucideProps>;
  techStack: string[];
  demoLink: string;
  source: string;
}

interface TechStackProps {
  stack: string[];
}

export enum Tech {
  React = "React.js",
  Node = "Node.js",
  Express = "express.js",
  Mongo = "Mongo-DB",
  Rest = "Rest-API",
  Socket = "Socket.io",
  TS = "TypeScript",
  Tailwind = "TailwindCss",
}

export const TechStack = ({ stack }: TechStackProps) => {
  const colors: Record<string, string> = {
    "React.js": "text-blue-400 border border-blue-400",
    "Node.js": "text-green-300 border border-green-300",
    "Rest-API": "text-white border border-white",
    "Mongo-DB": "text-green-500 border border-green-500",
    "Socket.io": "text-indigo-400 border border-indigo-300",
    TypeScript: "text-blue-600 border border-blue-600",
    TailwindCss: "text-blue-300 border border-blue-300",
    "express.js": "text-yellow-300 border border-yellow-300",
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {stack.map((tech) => (
        <p
          key={tech}
          className={`p-1 text-sm rounded-md ${
            colors[tech] || "border border-gray-200"
          }`}
        >
          {tech}
        </p>
      ))}
    </div>
  );
};

const projectInfos: ProjectInfoProps[] = [
  {
    title: "MoneyTracker",
    dark_img: moneytrackerDark,
    description: "Managing in/outcome in a visuall way",
    testDemo: TestTubeDiagonal,
    techStack: [
      Tech.React,
      Tech.Node,
      Tech.Express,
      Tech.Rest,
      Tech.Mongo,
      Tech.Tailwind,
    ],
    demoLink: "url",
    source: "url",
  },
  {
    title: "Chat-App",
    dark_img: chatDark,
    description: "Chatting with friend/colleagues",
    testDemo: TestTubeDiagonal,
    techStack: [
      Tech.React,
      Tech.Node,
      Tech.Express,
      Tech.Rest,
      Tech.Mongo,
      Tech.Socket,
      Tech.Tailwind,
    ],
    demoLink: "url",
    source: "url",
  },
  {
    title: "Kanban-Board",
    dark_img: kanbanDark,
    description: "Managing Tasks with your Team",
    testDemo: TestTubeDiagonal,
    techStack: [
      Tech.React,
      Tech.Node,
      Tech.Express,
      Tech.Rest,
      Tech.Tailwind,
      Tech.Mongo,
      Tech.TS,
    ],
    demoLink: "url",
    source: "url",
  },
];

export const ProjectSection = () => {
  return (
    <div className="project-list">
      {projectInfos.map((project) => (
        <Card className="bg-transparent space-y-5 p-2" key={project.title}>
          <img
            src={project.dark_img}
            alt="Project-Image"
            className="project-img"
          />

          <div className="space-y-5">
            <h1>{project.title}</h1>

            <p>{project.description}</p>

            <TechStack stack={project.techStack} />

            <div className="flex gap-3">
              <Button className="flex items-center gap-3">
                Live Demo
                <project.testDemo style={{ backgroundColor: "unset" }} />
              </Button>
              <Button asChild>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github /> Source
                </a>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
