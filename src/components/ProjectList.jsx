import React from "react";
import works from "../data/works";

import WorkItem from "./Project";

function Works() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5">
        {works.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            imgBlurred={work.imgBlurred}
            date={work.date}
            title={work.title}
            tech={work.tech}
            demoUrl={work.demoUrl}
            workUrl={work.workUrl}
            about={work.about}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
