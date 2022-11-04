import React from "react";

function WorkItem({ imgUrl, title, tech, workUrl }) {
  return (
    <a
      href={workUrl}
      target="_blank"
      rel="noreferrer"
      className="bg-white dark:bg-zinc-900 rounded-lg  overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="work"
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="w-full p-5 bg-white dark:bg-zinc-900 rounded-b-lg border-x-2 border-b-2 border-white  dark:border-zinc-700 duration-300">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white duration-300">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white duration-300">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 bg-slate-200 dark:bg-zinc-700 rounded-md dark:text-white duration-300"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default WorkItem;
