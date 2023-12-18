import { IProjectData } from "@/db";
import React from "react";
interface Props {
  project: IProjectData;
  clickFnc: (project: IProjectData) => void;
}

const ProjectTab = ({ project, clickFnc }: Props) => {
  const changeGradient = () => {
    const purple = "#663597";
    const red = "#a43422";
    const yellow = "#f9d71c";
    const green = "#008080";
    let color1 = "";
    let color2 = "";
    switch (project.name) {
      case "Velnes":
        color1 = red;
        color2 = green;
        break;
      case "Coza Store":
        color1 = purple;
        color2 = red;
        break;
      case "Street Artists":
        color1 = yellow;
        color2 = green;
        break;
      case "The money solicitor":
        color1 = purple;
        color2 = green;
        break;
      case "Portfolio Website":
        color1 = green;
        color2 = yellow;
        break;
      default:
        color1 = purple;
        color2 = yellow;
        break;
    }
    document.documentElement.style.setProperty("--grad-1", color1);
    document.documentElement.style.setProperty("--grad-2", color2);
  };
  return (
    <div
      className="border-b border-color-90 pb-1 cursor-pointer font-stretch"
      key={project.name}
      onClick={() => {
        clickFnc(project);
        changeGradient();
      }}
    >
      <h3 className="inline">{project.name}</h3>
    </div>
  );
};

export default ProjectTab;
