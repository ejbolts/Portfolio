import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const About = () => {
  const slidesData = [
    {
      id: 1,
      src: "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/Graduate-Stage-photo.webp",
      alt: "Ethan Graduate Stage photo",
      location: "Exhibition Centre, BNE",
      date: "Nov 2024",
    },
    {
      id: 2,
      src: "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/ice-skating-crop.webp",
      alt: "Ethan ice skating",
      location: "Ice World, BNE",
      date: "Mar 2024",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentSlideData =
    slidesData &&
    currentSlideIndex >= 0 &&
    currentSlideIndex < slidesData.length
      ? slidesData[currentSlideIndex]
      : null;

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div
      id="About"
      className="flex flex-col p-5 md:flex-row items-center justify-center gap-10 md:gap-20 pt-14 pb-8"
    >
      <div className="w-full md:w-6/12">
        <h2 className="text-3xl md:text-3xl mb-5 font-black dark:text-white duration-1000">
          About Me
        </h2>
        {/* ... Your text content ... */}
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          I have a strong foundation in web development, with a particular focus
          on designing full-stack applications. I have experience with React,
          Angular, NodeJS, TypeScript, Python, AWS and much more. I have a deep
          understanding of the core elements of software engineering, such as
          data structures and algorithms, and I am a team player who enjoys
          collaborating with others to create innovative and engaging
          applications.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          To showcase my skills and experiences, I have created this portfolio
          website that includes details about my projects and interests.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          In addition to my academic studies, I am also looking to gain
          practical experience. I have worked in the retail industry for several
          years, and I have developed strong communication and interpersonal
          skills. I am eager to apply these skills in a professional setting,
          and I am excited about the opportunity to learn from experienced
          professionals and contribute to a dynamic and innovative organisation.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          For my future professional career, I plan to have a position as a
          full-stack software engineer at a reputable company where I can
          continue to learn new skills and make a meaningful contribution to the
          organisation. I am motivated to improve my skills and knowledge, and I
          am looking forward to joining a team that shares my passion for
          software development and innovation.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          In my free time, I enjoy staying active and healthy by going to the
          gym. I have been going consistently for six plus years and have built
          up a good level of strength, fitness and discipline. I also enjoy
          gaming on PC and console. I like a wide variety of game genres so no
          particular favourites haha. I also enjoy listening to EDM and Rock
          music to get me hyped up.
        </p>
      </div>

      <div className="group relative md:w-6/12 w-full">
        <div className="h-[765px] w-full rounded-2xl  overflow-hidden">
          <Carousel
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container h-full"
            itemClass="carousel-item h-full"
            showDots={true}
            arrows={true}
            autoPlaySpeed={5000}
            autoPlay={true}
            dotListClass="react-multi-carousel-dot-list z-10"
            afterChange={(previousSlide, state) => {
              if (state && typeof state.currentSlide === "number") {
                const actualDataIndex = state.currentSlide % slidesData.length;

                if (
                  actualDataIndex >= 0 &&
                  actualDataIndex < slidesData.length
                ) {
                  setCurrentSlideIndex(actualDataIndex);
                } else {
                  console.error(
                    "Calculated actualDataIndex is out of bounds:",
                    actualDataIndex
                  );
                  setCurrentSlideIndex(0);
                }
              } else {
                console.error(
                  "Received invalid or missing currentSlide in state from carousel:",
                  state
                );
              }
            }}
          >
            {slidesData.map((slide) => (
              <div key={slide.id} className="w-full h-full">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {currentSlideData ? (
          <div className="absolute inset-x-0 bottom-0 rounded-2xl pointer-events-none z-10">
            <div
              className="opacity-0 group-hover:opacity-100 transform translate-y-4 
              group-hover:translate-y-0 transition-all duration-300 p-4 text-white   bg-gradient-to-t rounded-2xl  from-black/70  via-black/40 to-transparent "
            >
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
                <span>{currentSlideData.location}</span>
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
                <span>{currentSlideData.date}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-x-0 bottom-0 p-4 text-white text-center z-10"></div>
        )}
      </div>
    </div>
  );
};

export default About;
