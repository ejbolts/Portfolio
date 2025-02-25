import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import useDarkMode from "./useDarkMode";

const Introdcution = () => {
  const [colourTheme, mode, setTheme] = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(mode);
  const [isIntroImgLoaded, setIsIntroImgLoaded] = useState(false);

  const IntroIMG =
    "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/intro-min.webp";
  const BlurredIntroIMG =
    "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/intro-blurred.webp";
  return (
    <div className="flex items-center flex-col py-5 text-center">
      <div className="flex w-full">
        <div className=" justify-center w-full ml-28">
          <h1 className="text-5xl md:text-6xl md:mb-5 font-black dark:text-white  duration-1000">
            Ethan Bolton
          </h1>
        </div>
        <div className="mr-6 mt-4">
          <DayNightToggle
            onChange={() => setIsDarkMode(!isDarkMode)}
            checked={isDarkMode}
            onClick={() => setTheme(colourTheme)}
            animationInactive={false}
          />
        </div>
      </div>

      <div className="flex mx-auto max-w-2xl  lg:max-w-5xl pt-5  ">
        <div className="max-w-sm mx-5 bg-white dark:bg-zinc-900 rounded-2xl   shadow-lg  overflow-hidden md:max-w-2xl  duration-1000">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-80 w-full object-cover md:h-full md:w-48"
                src={isIntroImgLoaded ? IntroIMG : BlurredIntroIMG}
                loading="lazy"
                onLoad={() => setIsIntroImgLoaded(true)}
              />
            </div>
            <div className="p-8 md:rounded-r-2xl md:border-y-2 border-r-2 max-sm:border-x-2 sm:border-x-2 border-b-2 border-zinc-300  dark:border-zinc-700 text-gray-600  bg-white dark:bg-zinc-800 duration-1000">
              <h2 className="block mt-1 text-lg leading-tight font-bold  text-black dark:text-white  duration-1000">
                Summary
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300  text-left  duration-1000">
                Welcome! I'm Ethan, a passionate developer. I recently graduated
                at Griffith University studying software engineering, I'm
                combining my enthusiasm for the digital world with rigorous
                academic training. My mission? To create intuitive, impactful,
                and immersive web experiences that bridge the gap between
                technology and its users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introdcution;
