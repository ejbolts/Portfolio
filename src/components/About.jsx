import myImg from "../images/About-me-img.jpg";
const About = () => {
  return (
    <div className="flex flex-col p-5 md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
      <div className="w-full md:w-6/12">
        <h2 className="block mb-1 text-xl leading-tight font-bold  text-black dark:text-white  duration-300">
          About Me
        </h2>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          veniam dolor consectetur pariatur explicabo, iure nulla. Dolor
          debitis, natus cum ad, fugiat excepturi minima culpa atque modi
          accusantium vel voluptatem?
        </p>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          veniam dolor consectetur pariatur explicabo, iure nulla. Dolor
          debitis, natus cum ad, fugiat excepturi minima culpa atque modi
          accusantium vel voluptatem?
        </p>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          veniam dolor consectetur pariatur explicabo, iure nulla. Dolor
          debitis, natus cum ad, fugiat excepturi minima culpa atque modi
          accusantium vel voluptatem?
        </p>
      </div>

      <img
        src={myImg}
        alt="Ethan"
        className="w-full  md:w-6/12  rounded-lg object-cover"
      />
    </div>
  );
};

export default About;
