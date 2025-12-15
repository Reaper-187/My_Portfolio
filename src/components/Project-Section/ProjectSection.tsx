import { TestTubeDiagonal, type LucideProps } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface ProjectInfoProps {
  title: string;
  img: string;
  description: string;
  testDemo: React.ComponentType<LucideProps>;
  techStack: string[];
}

interface TechStackProps {
  stack: string[];
}

export const TechStack = ({ stack }: TechStackProps) => {
  const colors: Record<string, string> = {
    React: "text-blue-800 bg-blue-300",
    "Node.js": "text-green-800 bg-green-300",
    MongoDB: "text-green-900 bg-green-200",
    "Rest-API": "text-black bg-white",
    "Socket.io": "text-purple-800 bg-purple-300",
    TypeScript: "text-blue-900 bg-blue-200",
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {stack.map((tech) => (
        <p
          key={tech}
          className={`p-1 rounded-md ${colors[tech] || "bg-gray-200"}`}
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
    img: "url",
    description: "Managing in/outcome in a visuall way",
    testDemo: TestTubeDiagonal,
    techStack: ["React", "Node.js", "MongoDB", "Rest-API"],
  },
  {
    title: "Chat-App",
    img: "url",
    description: "Chatting with friend/colleagues",
    testDemo: TestTubeDiagonal,
    techStack: ["React", "Node.js", "MongoDB", "Rest-API", "Socket.io"],
  },
  {
    title: "Kanban-Board",
    img: "url",
    description: "Managing Tasks with your Team",
    testDemo: TestTubeDiagonal,
    techStack: ["React", "Node.js", "MongoDB", "Rest-API", "TypeScript"],
  },
];

export const ProjectSection = () => {
  return (
    <>
      {projectInfos.map((project) => (
        <Card
          className="bg-transparent w-1/2 space-y-5 p-2"
          key={project.title}
        >
          <img src={project.img} alt="Project-Image" />
          <div className="space-y-5">
            <h1>{project.title}</h1>

            <p>{project.description}</p>

            <TechStack stack={project.techStack} />

            <div className="flex gap-3">
              <Button className="flex items-center gap-3">
                Live Demo
                <project.testDemo />
              </Button>
              <Button>Source</Button>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
