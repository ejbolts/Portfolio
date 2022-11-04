import IntroIMG from "../images/intro.jpg";
const Introdcution = () => {
  return (
    <div className="flex items-center flex-col pt-5 pb-20 text-center">
      <h1 className="text-5xl md:text-6xl md:mb-5 font-black dark:text-white  duration-300">
        Ethan Bolton
      </h1>
      <div className="flex mx-auto max-w-2xl  lg:max-w-5xl pt-5  ">
        <div className="max-w-sm mx-auto bg-white dark:bg-zinc-900 rounded-lg   shadow-lg  overflow-hidden md:max-w-2xl  duration-300">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-80 w-full object-cover md:h-full md:w-48"
                src={IntroIMG}
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8 md:rounded-r-lg max-sm:rounded-b-lg md:border-y-2 border-r-2 max-sm:border-x-2 sm:border-x-2 border-b-2 border-white  dark:border-zinc-700  duration-300">
              <h2 className="block mt-1 text-lg leading-tight font-bold  text-black dark:text-white  duration-300">
                Summary
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 font-extralight text-left  duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, voluptatum dolore dignissimos consequatur
                reiciendis ut veritatis possimus consequuntur exercitationem,
                illum nisi vel porro vero debitis necessitatibus eaque repellat
                ad! Eligendi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introdcution;
