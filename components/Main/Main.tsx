"use client";
import { HomePageBannerText, IProjectData, ProjectsData } from "@/db";
import TypingTextAnimation from "../HeadingAnimates/TypingTextAnimation";
import { useState } from "react";
import ProjectSection from "../ProjectSection/ProjectSection";
import ProjectTab from "../Tabs/ProjectTab";

const Main = () => {
  const [activeTab, setActiveTab] = useState("Welcome");

  const clickPortfolioTab = (project: IProjectData) => {
    if (activeTab === project.name) {
      setActiveTab("Welcome");
    } else {
      setActiveTab(project.name);
    }
  };

  return (
    <main className="flex flex-col lg:flex-row ml-12 gap-24 box-border max-w-full flex-grow min-h-full">
      <div className="w-full lg:w-2/3  min-h-full flex-grow overflow-hidden  ">
        <div className={activeTab === "Welcome" ? "slide-in " : "hidden"}>
          <TypingTextAnimation heading="Welcome." />
          <div
            className="flex flex-col gap-3 border-l border-color-180  pl-5"
            dangerouslySetInnerHTML={{ __html: HomePageBannerText }}
          />
        </div>
        {ProjectsData.map((project) => {
          return (
            <div
              className={
                activeTab === project.name ? `slide-in mt-11 ` : " hidden "
              }
              key={project.name}
            >
              <ProjectSection {...project} />
            </div>
          );
        })}
      </div>

      <div className="w-full lg:w-1/3 flex-grow-0">
        <h2 className="text-2xl mb-4 red dark:blue font-light tracking-wide">
          Projects
        </h2>
        <div className="custom-borderProject p-8 flex flex-col items-start gap-6">
          {ProjectsData.map((project) => (
            <ProjectTab
              key={project.name}
              project={project}
              clickFnc={clickPortfolioTab}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
