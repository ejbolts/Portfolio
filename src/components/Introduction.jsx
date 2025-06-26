import IntroductionImage from "./IntroductionImage";
const Introduction = () => {
  return (
    <div id="Intro" className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center ">
        <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full ">
          <div className="flex-1 text-left mb-10">
            <h1 className="text-5xl md:text-7xl font-black mb-2 mt-28 dark:text-white duration-1000">
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
               transition-all duration-300  "
              href="#contact"
            >
              Get in Touch
              <span className=" pl-2 inline-block animate-bounce"> 👇</span>
            </a>
          </div>
          <IntroductionImage />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
