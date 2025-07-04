import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import useInView from "./useInView";

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

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
      ref={ref}
      id="About"
      className={`flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 pt-14 pb-8 transform transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full md:w-6/12">
        <h2 className="text-4xl md:text-5xl mb-8 font-black dark:text-white duration-1000">
          About Me
        </h2>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          As a recent Software Engineering graduate from Griffith University,
          I'm passionate about building full-stack applications. I enjoy working
          with technologies like React, NodeJS, and TypeScript, and I'm
          comfortable across the entire development lifecycle, from crafting
          user interfaces to deploying on AWS.
        </p>

        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          My work experience has honed my communication and collaboration
          skills, and I'm eager to apply both my technical and interpersonal
          abilities in a professional team environment.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          For my future professional career, I plan to have a position at a
          reputable company where I can continue to learn new skills and make a
          meaningful contribution. I am motivated to improve my skills and
          knowledge, and I am looking forward to joining a team that shares my
          passion for software development and innovation.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          In my free time, I enjoy staying active and healthy by going to the
          gym. I have been going consistently for 6+ years and have built up a
          good level of strength, fitness and discipline. I also enjoy gaming on
          PC and console. I like a wide variety of game genres so no particular
          favourites. I also enjoy listening to EDM and metalcore music.
        </p>
      </div>

      <div className="group relative md:w-6/12 w-full">
        <div className="h-full w-full rounded-2xl  overflow-hidden">
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
