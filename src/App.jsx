import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introdcution from "./components/Introduction";
import Projects from "./components/ProjectList";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function App() {
  const options = {
    fullScreen: {
      enable: true,
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 900,
        },
      },
      color: {
        value: ["#000"],
      },
      shape: {
        type: "square",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 0, max: 0 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 1,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="  absolute -z-10 inset-0  bg-white dark:bg-black duration-300 ">
      <Particles options={options} init={particlesInit} />
      <div className="overflow-y-scroll fixed   inset-0 flex justify-center sm:px-8 ">
        <div className="flex w-full  max-w-7xl lg:px-8 ">
          <div className="w-full ">
            <div className="font-inter backdrop-blur-sm  bg-zinc-200/[.7] ring-1 ring-zinc-400 dark:bg-zinc-900/[.94] dark:ring-zinc-700  duration-300">
              <Introdcution />
              <Projects />
              <About />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
