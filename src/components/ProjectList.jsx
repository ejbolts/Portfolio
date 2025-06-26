import React from "react";
import works from "../data/works";
import WorkItem from "./Project";
import useInView from "./useInView";

function Works() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
