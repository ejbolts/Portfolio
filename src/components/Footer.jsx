import React from "react";
import LinkedInimg from "../images/LI-Logo.png";

function Footer() {
  return (
    <div className=" flex flex-col justify-center items-center py-5 mx-auto max-w-5xl border-x-2 border-t-2 border-zinc-300  dark:border-zinc-700  duration-300  bg-zinc-200dark:text-zinc-400 dark:bg-zinc-900 text-center dark:text-white rounded-t-lg">
      <p className=" pb-1 text-xl md:text-2xl font-semibold">Ethan Bolton</p>
      <a
        href="mailto:ejbolts@hotmail.com"
        className="mb-2 text-md md:text-mdtext-gray-600 text-gray-600 dark:text-gray-400 dark:hover:text-white hover:text-black duration-300"
      >
        ejbolts@hotmail.com
      </a>
      <a href="https://www.linkedin.com/in/ethanbolton/" target="_blank">
        <img className="w-32 " alt="LinkedIN" src={LinkedInimg} />
      </a>
    </div>
  );
}

export default Footer;
