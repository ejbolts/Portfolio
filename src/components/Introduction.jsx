import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import useDarkMode from "./useDarkMode";

const Introduction = () => {
  const [colourTheme, mode, setTheme] = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(mode);
  const [isIntroImgLoaded, setIsIntroImgLoaded] = useState(false);

  const IntroIMG =
    "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/About-me-img-min.webp";
  const BlurredIntroIMG =
    "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/intro-blurred.webp";

  return (
    <div id="Intro" className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full gap-12">
          <div className="flex-1 text-left mb-10">
            <h1 className="text-5xl md:text-7xl font-black mb-6 mt-28 dark:text-white duration-1000">
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
              className="!scroll-smooth inline-block px-6 py-3 mt-6 text-lg font-bold rounded-full 
               border-2 border-zinc-300  dark:border-zinc-700
               text-gray-600 dark:text-white
               hover:bg-black dark:hover:bg-white
               hover:text-white dark:hover:text-black
               transition-all duration-300 "
              href="#contact"
            >
              Get in Touch 👇
            </a>
          </div>

          <div className="flex-1 max-w-lg">
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full object-cover"
                src={isIntroImgLoaded ? IntroIMG : BlurredIntroIMG}
                loading="lazy"
                onLoad={() => setIsIntroImgLoaded(true)}
                alt="Ethan Bolton"
              />
              <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 p-4 text-white z-20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none -z-10 rounded-2xl" />
                <div className="flex items-center text-sm sm:text-base">
                  <svg
                    className="w-5 h-5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Binna Burra, QLD</span>
                  <span className="mx-2">•</span>
                  <svg
                    className="w-5 h-5 mr-1.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
