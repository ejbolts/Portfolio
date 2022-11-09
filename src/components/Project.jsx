import React from "react";

const WorkItem = ({ imgUrl, title, tech, workUrl, about }) => {
  return (
    <div className="group">
      <div className="relative">
        <img
          src={imgUrl}
          alt="work"
          className=" w-full h-36 md:h-48 object-cover rounded-t-2xl "
        />
        <div className="group-hover:bg-black group-hover:bg-opacity-60 absolute inset-0 rounded-t-2xl duration-300 ">
          <p className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 flex items-center text-white pl-6 group-hover:translate-y-2">
            {about}
          </p>
        </div>
      </div>

      <div className="w-full p-5 shadow-lg bg-white dark:bg-zinc-800 rounded-b-2xl border-x-2 border-b-2 border-zinc-300  dark:border-zinc-700 duration-300">
        <h3 className="text-lg md:text-xl  mb-2 md:mb-3 font-semibold dark:text-white duration-300">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white duration-300">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 bg-slate-200 dark:bg-zinc-700 rounded-md  dark:text-white duration-300"
            >
              {item}
            </span>
          ))}
          <a
            href={workUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-auto justify-end inline-block px-2 py-1 bg-slate-200  dark:bg-zinc-700 rounded-md  dark:text-white hover:bg-slate-300 dark:hover:bg-zinc-600 duration-300"
          >
            Github
            <svg
              className="inline-block text-zinc-500 dark:text-zinc-400 ml-1 w-4 h-4 duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
