import React from "react";
import works from "../data/works";

import WorkItem from "./Project";

function Works() {
  return (
    <div className="">
      <h2 className="text-3xl md:text-3xl m-5 font-black dark:text-white  duration-1000">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5">
        {works.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
            workUrl={work.workUrl}
            about={work.about}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
