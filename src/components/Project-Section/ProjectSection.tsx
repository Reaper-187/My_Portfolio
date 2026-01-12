import { Github, TestTubeDiagonal, type LucideProps } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import moneytrackerDark from "@/assets/moneytracker_imgs/moneytracker_dark.png";
import kanbanDark from "@/assets/kanban_imgs/kanban_dark.png";
import chatDark from "@/assets/chat_imgs/chat_dark.png";
import chatLight from "@/assets/chat_v2_imgs/chat_v2.png";
import { Tech, TechStack } from "../TechStack/TechStack";
import { InViewWrapper } from "../Animations/InViewWrapper";
import { SectionWrapper } from "../Section-Comp/SectionWrapper";
import { OverlayComp } from "../Overlay-Pattern/OverlayComp";
import { useEffect, useState } from "react";
import "./Project.sass";

interface ProjectInfoProps {
  title: string;
  project_img?: string;
  description: string;
  testDemo: React.ComponentType<LucideProps>;
  techStack: string[];
  demoLink: string;
  source: string;
}

const projectInfos: ProjectInfoProps[] = [
  {
    title: "MoneyTracker",
    project_img: moneytrackerDark,
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
    source: "https://github.com/Reaper-187/Money-Tracker",
  },
  {
    title: "Chat-App",
    project_img: chatDark,
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
    source: "https://github.com/Reaper-187/Chat-Messanger",
  },
  {
    title: "Kanban-Board",
    project_img: kanbanDark,
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
    source: "https://github.com/Reaper-187/Kanban-Board",
  },
  {
    title: "Chat-App-V2",
    project_img: chatLight,
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
      Tech.TS,
    ],
    demoLink: "url",
    source: "https://github.com/Reaper-187/Chat-App-V2",
  },
];

export const ProjectSection = () => {
  const [selectedProjectImage, setSelectedProjectImage] = useState<
    string | undefined
  >();

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handelResetImgUrl();
      }
    };
    if (selectedProjectImage) {
      document.addEventListener("keydown", handleEscKey);
    }
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [selectedProjectImage]);

  const handleImgUrl = (e: React.MouseEvent<HTMLImageElement>) => {
    const fullUrl = e.currentTarget.src;
    const relativePath = fullUrl.replace(/^https?:\/\/[^\/]+\//, "/");
    setSelectedProjectImage(relativePath);
    document.body.style.overflow = "hidden";
  };

  const handelResetImgUrl = () => {
    document.body.style.overflow = "";
    setSelectedProjectImage(undefined);
  };
  return (
    <SectionWrapper sectionId="projects">
      <div className="project-list">
        <h1>Projects</h1>
        <div className="project-wrapper">
          {projectInfos.map((project, index) => {
            const delayTime = index * 0.3;
            return (
              <InViewWrapper
                delay={delayTime}
                addClassName="is-visible"
                threshHold={0.5}
                key={index}
              >
                <Card className={`bg-transparent space-y-5 p-2`}>
                  <img
                    src={project.project_img}
                    alt="Project-Image"
                    className="project-img"
                    loading="lazy"
                    onClick={handleImgUrl}
                  />

                  <div className="space-y-5">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <TechStack stack={project.techStack} />

                    <div className="flex gap-3">
                      <Button asChild className="flex items-center gap-3">
                        <a
                          href={
                            project.demoLink === "url" ? "#" : project.demoLink
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <project.testDemo
                            style={{ backgroundColor: "unset" }}
                          />
                          Live Demo
                        </a>
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
        {selectedProjectImage && (
          <OverlayComp
            imgUrl={selectedProjectImage}
            onCloseImg={handelResetImgUrl}
          />
        )}
      </div>
    </SectionWrapper>
  );
};
