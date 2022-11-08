import IntroIMG from "../images/intro.jpg";
import DarkModeBtn from "./DarkModeBtn";
const Introdcution = () => {
  return (
    <div className="flex items-center flex-col py-5 text-center">
      <div className="flex w-full">
        <div flex className=" justify-center w-full ml-20">
          <h1 className="text-5xl md:text-6xl md:mb-5 font-black dark:text-white  duration-300">
            Ethan Bolton
          </h1>
        </div>

        <DarkModeBtn />
      </div>

      <div className="flex mx-auto max-w-2xl  lg:max-w-5xl pt-5  ">
        <div className="max-w-sm mx-auto bg-white dark:bg-zinc-900 rounded-2xl   shadow-lg  overflow-hidden md:max-w-2xl  duration-300">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-80 w-full object-cover md:h-full md:w-48"
                src={IntroIMG}
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8 md:rounded-r-2xl md:border-y-2 border-r-2 max-sm:border-x-2 sm:border-x-2 border-b-2 border-zinc-300  dark:border-zinc-700 text-gray-600  bg-white dark:bg-zinc-800 duration-300">
              <h2 className="block mt-1 text-lg leading-tight font-bold  text-black dark:text-white  duration-300">
                Summary
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300  text-left  duration-300">
                Hi, I'm Ethan. I am an Aspiring web developer and a software
                engineering student at Griffith University.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introdcution;
