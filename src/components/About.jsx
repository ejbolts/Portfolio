import myImg from "../images/About-me-img.jpg";
const About = () => {
  return (
    <div className="flex flex-col p-5 md:flex-row items-center justify-center gap-10 md:gap-20 pt-14 pb-8">
      <div className="w-full md:w-6/12">
        <h2 className="text-3xl md:text-3xl mb-5 font-black dark:text-white  duration-300">
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

      <img
        src={myImg}
        alt="Ethan"
        className="w-full  md:w-6/12  rounded-2xl object-cover shadow-lg"
      />
    </div>
  );
};

export default About;
