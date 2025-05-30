import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import useDarkMode from "./useDarkMode";

const Introduction = () => {
  const [colourTheme, mode, setTheme] = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(mode);
  const [isIntroImgLoaded, setIsIntroImgLoaded] = useState(false);

  const IntroIMG =
    "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/intro-min.webp";
  const BlurredIntroIMG =
    "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/intro-blurred.webp";

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-4 right-6">
        <DayNightToggle
          onChange={() => setIsDarkMode(!isDarkMode)}
          checked={isDarkMode}
          onClick={() => setTheme(colourTheme)}
          animationInactive={false}
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full gap-12">
          <div className="flex-1 text-left">
            <h1 className="text-5xl md:text-7xl font-black mb-6 dark:text-white duration-1000">
              Ethan Bolton
            </h1>
            <h2
              className="text-5xl md:text-4xl duration-1000 font-black mb-6 bg-gradient-to-r from-amber-500
             to-pink-500   text-transparent bg-clip-text"
            >
              Software Engineer
            </h2>
            <div className="prose dark:prose-invert lg:prose-lg">
              <p className="text-gray-600 dark:text-gray-300 text-xl duration-1000">
                Welcome! I'm Ethan, a passionate developer. I recently graduated
                at Griffith University studying software engineering, I'm
                combining my enthusiasm for the digital world with rigorous
                academic training. My mission? To create intuitive, impactful,
                and immersive web experiences that bridge the gap between
                technology and its users.
              </p>
            </div>
            <a
              className="inline-block px-6 py-3 mt-6 text-lg font-bold rounded-full 
    border border-black dark:border-white
    text-black dark:text-white
    hover:bg-black dark:hover:bg-white
    hover:text-white dark:hover:text-black
    transition-all duration-300"
              href="#contact"
            >
              Let's start a project together
            </a>
          </div>

          <div className="flex-1 max-w-lg">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-[600px] object-cover"
                src={isIntroImgLoaded ? IntroIMG : BlurredIntroIMG}
                loading="lazy"
                onLoad={() => setIsIntroImgLoaded(true)}
                alt="Ethan Bolton"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
