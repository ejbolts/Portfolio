import React from "react";

function Footer() {
  const LinkedInimg =
    "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/LI-Logo.png";
  const githubimg =
    "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/github-logo.png";
  return (
    <div className=" flex flex-col justify-center items-center py-5 mx-auto max-w-full   border-t border-zinc-300  dark:border-zinc-700  duration-1000   text-center dark:text-white ">
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/ethanbolton/" target="_blank">
          <img
            className="w-9 "
            alt="LinkedIN"
            src={LinkedInimg}
            loading="lazy"
          />
        </a>
        <a href="https://github.com/ejbolts" target="_blank">
          <img className="w-8  " alt="Github" src={githubimg} loading="lazy" />
        </a>
      </div>
      <p className="pt-3 text-sm font-extralight text-gray-600 dark:text-gray-400">
        {new Date().getFullYear()} © Ethan Bolton. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
