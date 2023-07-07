import React from "react";
import LinkedInimg from "../images/LI-Logo.png";
import githubimg from "../images/github-logo.png";

function Footer() {
  return (
    <div className=" flex flex-col justify-center items-center py-5 mx-auto max-w-full   border-t border-zinc-300  dark:border-zinc-700  duration-1000   text-center dark:text-white ">
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/ethanbolton/"
          target="_blank"
        >
          <img
            className="w-9 "
            alt="LinkedIN"
            src={LinkedInimg}
            loading="lazy"
          />
        </a>
        <a
          href="https://github.com/ebolts"
          target="_blank"
        >
          <img
            className="w-8  "
            alt="Github"
            src={githubimg}
            loading="lazy"
          />
        </a>
      </div>
      <p className="pt-3 text-sm font-extralight text-gray-600 dark:text-gray-400">
        {new Date().getFullYear()} © Ethan Bolton. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
