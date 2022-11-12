import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const BackgroundParticles = () => {
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
          area: 700,
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
          mode: "repulse",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        repulse: {
          distance: 200,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return <Particles options={options} init={particlesInit} />;
};

export default BackgroundParticles;
