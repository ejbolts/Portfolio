import Experience from "./Experience";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col pb-5 px-5 md:flex-row items-center md:gap-20"
    >
      <form
        action="https://formsubmit.co/2a1af732cd88ea3c5b4836d0503390f4"
        method="POST"
        className="flex flex-col w-full pb-5  md:w-6/12"
      >
        <h2 className="text-3xl md:text-3xl mb-5 font-black dark:text-white  duration-1000">
          Contact
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-zinc-300  dark:border-zinc-700 text-gray-600 dark:text-white duration-1000"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none border-zinc-300  dark:border-zinc-700 text-gray-600 dark:text-white duration-1000"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="10"
          required
          className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none
           border-zinc-300  dark:border-zinc-700 text-gray-600 dark:text-white duration-1000"
        ></textarea>
        <input
          type="hidden"
          name="_next"
          value="https://ethanbolton.com"
        ></input>
        <button
          type="submit"
          className="inline-block w-48 px-6 py-3  text-lg font-bold rounded-full 
                border-2 border-zinc-300  dark:border-zinc-700
                text-gray-600 dark:text-white
                hover:bg-black dark:hover:bg-white
                hover:text-white dark:hover:text-black
                transition-all duration-300 "
        >
          Submit
        </button>
      </form>
      <Experience />
    </div>
  );
};

export default Contact;
