import React, { useState } from "react";
import useInView from "./useInView";

const MainProject = () => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const project = {
    title: "AnguChat",
    date: "Nov 2024",
    imgUrl:
      "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/Anguchat-Preview.webp",
    imgBlurred:
      "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/AnguchatScreenShot.webp",
    description: `AnguChat is a full-featured text and video streaming chat application built with Angular and Node.js. 
    It offers seamless real-time communication with group chat capabilities and comprehensive administrative controls.`,
    tech: ["Angular", "Node", "PeerJs", "Socket.io", "MongoDB", "AWS EC2 & S3"],
    demoUrl: "https://anguchat.com",
    githubUrl: "https://github.com/ejbolts/Text-video-chat-app",
  };

  return (
    <div
      ref={ref}
      id="Projects"
      className={`py-10 transform transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-4xl md:text-5xl mb-8 font-black dark:text-white duration-1000">
        Projects
      </h2>
      <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={isImgLoaded ? project.imgUrl : project.imgBlurred}
          alt={project.title}
          className="w-full h-[500px] object-cover duration-300 group-hover:scale-105"
          onLoad={() => setIsImgLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 p-8 w-full">
            <h3 className="text-3xl font-bold text-white ">{project.title}</h3>
            <span className="text-sm md:text-sm text-white duration-1000">
              {project.date}
            </span>
            <p className="text-gray-200 mt-2 mb-6 max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transition-colors"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProject;
