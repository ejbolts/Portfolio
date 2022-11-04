import React from "react";
import works from "../data/works";
import test from "../images/app3.png";
import WorkItem from "./Project";

function Works() {
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-3xl m-5 font-black dark:text-white  duration-300">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5">
        {works.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={test}
            title={work.title}
            tech={work.tech}
            workUrl={work.workUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
