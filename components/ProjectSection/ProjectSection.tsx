import { IProjectData } from "@/db";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const ProjectSection = ({
  name,
  desc,
  websiteLink,
  sourceLink,
  pictures,
}: IProjectData) => {
  return (
    <div>
      <h2 className="mb-4 text-4xl">{name}</h2>
      <div className="border-l border-color-180 pl-5 flex flex-col gap-8">
        <p>{desc}</p>
        <div className="flex gap-10">
          {websiteLink && <PrimaryButton link={websiteLink} text="View Site" />}
          {sourceLink && <PrimaryButton link={sourceLink} text={"View Code"} />}
          {pictures.length !== 0 && (
            <PrimaryButton text="Open Gallery" link="/" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;