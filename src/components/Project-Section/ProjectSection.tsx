import { Github, TestTubeDiagonal, type LucideProps } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import moneytrackerDark from "@/assets/moneytracker_imgs/moneytracker_dark.png";
import kanbanDark from "@/assets/kanban_imgs/kanban_dark.png";
import chatDark from "@/assets/chat_imgs/chat_dark.png";
import chatLight from "@/assets/chat_v2_imgs/chat_v2.png";
import urlShortnerLight from "@/assets/url_shortner/url_shortner_light.png";
import featureFlagLight from "@/assets/feature_flag_imgs/dashboard.png";
import { Tech, TechStack } from "../TechStack/TechStack";
import { InViewWrapper } from "../Animations/InViewWrapper";
import { SectionWrapper } from "../Section-Comp/SectionWrapper";
import { OverlayComp } from "../Overlay-Pattern/OverlayComp";
import { useEffect, useState } from "react";
import "./Project.sass";
import { useTranslation } from "react-i18next";

interface ProjectInfoProps {
  id: string;
  title: string;
  project_img?: string;
  description: string;
  testDemo: React.ComponentType<LucideProps>;
  techStack: string[];
  demoLink?: string;
  source: string;
}

const projectInfos: ProjectInfoProps[] = [
  {
    id: "moneyTracker",
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
    source: "https://github.com/Reaper-187/Money-Tracker",
  },
  {
    id: "chatApp",
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

    source: "https://github.com/Reaper-187/Chat-Messanger",
  },
  {
    id: "kanbanBoard",
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

    source: "https://github.com/Reaper-187/Kanban-Board",
  },
  {
    id: "chatAppV2",
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

    source: "https://github.com/Reaper-187/Chat-App-V2",
  },
  {
    id: "featureFlagTool",
    title: "Feature-Flag-Tool",
    project_img: featureFlagLight,
    description: "be able to controlle your featuers",
    testDemo: TestTubeDiagonal,
    techStack: [
      Tech.React,
      Tech.Express,
      Tech.TS,
      Tech.Node,
      Tech.Rest,
      Tech.PostgreSQL,
      Tech.Tailwind,
    ],

    source: "https://github.com/Reaper-187/Feature-Flag-Tool",
  },
  {
    id: "urlShortner",
    title: "URL-Shortner",
    project_img: urlShortnerLight,
    description: "cut your long url into a shorter one",
    testDemo: TestTubeDiagonal,
    techStack: [
      Tech.React,
      Tech.Express,
      Tech.TS,
      Tech.Node,
      Tech.Rest,
      Tech.PostgreSQL,
      Tech.Tailwind,
    ],

    source: "https://github.com/Reaper-187/url-shortener",
  },
];

export const ProjectSection = () => {
  const { t } = useTranslation("projects");
  const [selectedProjectImage, setSelectedProjectImage] = useState<
    string | undefined
  >();

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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
        <h1>{t("heading")}</h1>
        <div className="project-wrapper">
          {projectInfos.map((project, index) => {
            const delayTime = index * 0.3;
            const demoOnline = Boolean(project.demoLink);
            return (
              <InViewWrapper
                delay={delayTime}
                addClassName="is-visible"
                threshHold={0.5}
                key={project.id}
              >
                <Card className="project-card">
                  <img
                    src={project.project_img}
                    alt={t(`items.${project.id}.title`)}
                    className="project-img"
                    loading="lazy"
                    onClick={handleImgUrl}
                  />

                  <div className="project-card-body">
                    <h3 className="project-title">
                      {t(`items.${project.id}.title`)}
                    </h3>

                    <p className="project-description">
                      {t(`items.${project.id}.description`)}
                    </p>

                    <div className="project-tech">
                      <TechStack stack={project.techStack} />
                    </div>

                    <div className="project-actions">
                      {demoOnline ? (
                        <Button
                          asChild
                          className="project-btn project-btn-primary"
                        >
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t("buttons.demo")}
                          </a>
                        </Button>
                      ) : (
                        <Button disabled className="project-btn">
                          <project.testDemo className="project-btn-icon" />
                          {t("buttons.uploadPending")}
                        </Button>
                      )}
                      <Button asChild className="project-btn">
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="project-btn-icon" />
                          {t("buttons.source")}
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
