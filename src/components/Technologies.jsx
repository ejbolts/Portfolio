import useInView from "./useInView";
import techs from "../data/tech";

const Technologies = () => {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="technologies"
      className={`w-full py-12 transform transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-4xl md:text-5xl mb-8 font-black dark:text-white duration-1000">
        Technologies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 md:gap-x-16 px-4 max-w-4xl mx-auto">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center min-w-[80px]"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2 rounded-full"
              loading="lazy"
            />
            <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 duration-1000">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
