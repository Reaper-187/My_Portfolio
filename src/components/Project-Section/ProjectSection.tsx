import { Github, TestTubeDiagonal, type LucideProps } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import moneytrackerDark from "@/assets/moneytracker_imgs/moneytracker_dark.png";
import kanbanDark from "@/assets/kanban_imgs/kanban_dark.png";
import chatDark from "@/assets/chat_imgs/chat_dark.png";
import { Tech, TechStack } from "../TechStack/TechStack";
import { InViewWrapper } from "../Animations/InViewWrapper";
import { SectionWrapper } from "../Section-Comp/SectionWrapper";
import "./Project.sass";

interface ProjectInfoProps {
  title: string;
  dark_img?: string;
  description: string;
  testDemo: React.ComponentType<LucideProps>;
  techStack: string[];
  demoLink: string;
  source: string;
}

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
    <SectionWrapper sectionId="projects">
      <div className="project-list">
        <h1>projects</h1>
        <div className="project-wrapper">
          {projectInfos.map((project, index) => {
            const delayTime = index * 0.3;
            return (
              <InViewWrapper
                delay={delayTime}
                addClassName="is-visible"
                threshHold={0.5}
              >
                <Card
                  className={`bg-transparent space-y-5 p-2`}
                  key={project.title}
                >
                  <img
                    src={project.dark_img}
                    alt="Project-Image"
                    className="project-img"
                    loading="lazy"
                  />

                  <div className="space-y-5">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <TechStack stack={project.techStack} />

                    <div className="flex gap-3">
                      <Button className="flex items-center gap-3">
                        Live Demo
                        <project.testDemo
                          style={{ backgroundColor: "unset" }}
                        />
                      </Button>
                      <Button asChild>
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github style={{ backgroundColor: "unset" }} /> Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </InViewWrapper>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
