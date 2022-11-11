import myImg from "../images/About-me-img.jpg";
const About = () => {
  return (
    <div className="flex flex-col p-5 md:flex-row items-center justify-center gap-10 md:gap-20 pt-14 pb-8">
      <div className="w-full md:w-6/12">
        <h2 className="text-3xl md:text-3xl mb-5 font-black dark:text-white  duration-1000">
          About Me
        </h2>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          I am fascinated by how software technologies are used in the industry
          to further our technological growth worldwide. I have an interest in
          software development and systems.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          I love learning about these topics and particularly how they will
          impact our current world going forward. For my future professional
          career, I plan to have a position as a software engineer at a
          reputable company where I can continue to learn new skills.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          My current goal is to get an internship position that would help gain
          me the knowledge and insights into real-world working environments. I
          have applied retail skills from working in the industry for 4 years
          throughout senior high school and after. From this I have gained a
          high standard of communication with strong interpersonal skills.
          Outside of my studies I continuously work on sharping my technical
          skills relating to software development through completing personal
          projects.
        </p>
        <p className="text-md pb-2 text-gray-600 dark:text-gray-300">
          I have the ability to work individually or as a resourceful team
          member. I am keen to work with an organisation that shares my
          motivation to improve my skills and knowledge to make a positive
          impact on people’s lives
        </p>
      </div>

      <div className="group relative md:w-6/12">
        <img
          src={myImg}
          alt="Ethan"
          className="    rounded-2xl object-cover shadow-lg"
        />
        <div className="group-hover:bg-black group-hover:bg-opacity-60 absolute rounded-b-2xl duration-1000 inset-x-0 bottom-0  h-10  ">
          <p className=" opacity-0 group-hover:opacity-100  duration-1000 absolute bottom-0 left-0  flex items-center text-white  h-10 w-full group-hover:translate-x-2">
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
