import React from "react";
import DayNightToggle from "react-day-and-night-toggle";
import useDarkMode from "./useDarkMode";

const Navbar = () => {
  const [colourTheme, mode, setTheme] = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-black/70 border-b border-zinc-300 dark:border-zinc-700 duration-1000">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#Intro"
              className="text-xl font-bold text-gray-800 dark:text-white duration-1000"
            >
              EB
            </a>
          </div>

          <div className="flex space-x-8">
            <a
              href="#About"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white duration-300"
            >
              About
            </a>
            <a
              href="#Projects"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white duration-300"
            >
              Contact
            </a>

            <div className="flex items-center">
              <DayNightToggle
                onChange={() => setTheme(colourTheme)}
                checked={mode}
                size={24}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
