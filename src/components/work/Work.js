import React from "react";
import WorkCard from "../WorkCard/WorkCard";
import ProjectCardData from "./workDetails";

const Work = () => {
  return (
    <div className="work-con bg-gradient-to-r from-gray-800  to-gray-900">
      <div className="h-80 pt-12">
        <h1 className="project-heading text-center text-2xl uppercase">
          Projects
        </h1>
      </div>

      <div className="project-con px-4">
        {ProjectCardData.map((val, ind) => {
          return <WorkCard key={ind} val={val} />;
        })}
      </div>
    </div>
  );
};

export default Work;
