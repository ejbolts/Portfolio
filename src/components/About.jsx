import myImg from "../images/About-me-img-min.jpg";
const About = () => {
  return (
    <div className="flex flex-col p-5 md:flex-row items-center justify-center gap-10 md:gap-20 pt-14 pb-8">
      <div className="w-full md:w-6/12">
        <h2 className="text-3xl md:text-3xl mb-5 font-black dark:text-white  duration-1000">
          About Me
        </h2>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          My name is Ethan and I am currently in my third year studying software
          engineering at Griffith University. I am fascinated by how software
          technologies are used in the industry to further our technological
          growth worldwide, and I love learning about the latest developments
          and how they will impact our world going forward.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          I have a strong foundation in web development, with a particular focus
          on JavaScript, HTML, and CSS. I have also gained some experience with
          the React framework and have a basic knowledge of Python. I have a
          deep understanding of the core elements of software engineering, such
          as data structures and algorithms, and I am a team player who enjoys
          collaborating with others to create innovative and engaging
          applications.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          To showcase my skills and experiences, I have created this portfolio
          website that includes details about my projects and interests.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          In addition to my academic studies, I am also looking to gain
          practical experience through an internship. I have worked in the
          retail industry for several years, and I have developed strong
          communication and interpersonal skills. I am eager to apply these
          skills in a professional setting, and I am excited about the
          opportunity to learn from experienced professionals and contribute to
          a dynamic and innovative organization.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          For my future professional career, I plan to have a position as a full
          stack software engineer at a reputable company where I can continue to
          learn new skills and make a meaningful contribution to the
          organization. I am motivated to improve my skills and knowledge, and I
          am looking forward to joining a team that shares my passion for
          software development and innovation.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          In my free time, I enjoy staying active and healthy by going to the
          gym. I have been going consistently for four years and have built up a
          good level of strength, fitness and discipline. I also enjoy playing
          video games on PC and console. I like a wide variety of game genres so
          no particular favourites. I also enjoy listening to EDM and Rock music
          and watching the occasional anime.
        </p>
      </div>

      <div className="group relative md:w-6/12">
        <img
          src={myImg}
          alt="Ethan"
          className="    rounded-2xl object-cover shadow-lg"
        />
        <div className="group-hover:bg-black group-hover:bg-opacity-60 absolute rounded-b-2xl duration-300 inset-x-0 bottom-0  h-10  ">
          <p className=" opacity-0 group-hover:opacity-100  duration-300 absolute bottom-0 left-0  flex items-center text-white  h-10 w-full group-hover:translate-x-2">
            <svg
              className="w-6 h-6 ml-2 mr-2"
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
            Binna Burra, QLD
            <svg
              className="w-6 h-6 ml-4 mr-2"
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
            </svg>{" "}
            Aug 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
