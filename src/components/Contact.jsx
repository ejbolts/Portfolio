import Resume from "./Resume";

const Contact = () => {
  return (
    <div className="flex flex-col pb-5 px-5 md:flex-row items-center   md:gap-20 ">
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
          className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none border-zinc-300  dark:border-zinc-700 text-gray-600 dark:text-white duration-1000"
        ></textarea>
        <input
          type="hidden"
          name="_next"
          value="https://ebolts.github.io/Portfolio/"
        ></input>
        <button
          type="submit"
          className="text-center inline-block pl-8 pr-6 pt-3 pb-2 w-max text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 drop-shadow-md dark:hover:text-white dark:text-zinc-200 dark:bg-emerald-600 dark:hover:bg-emerald-500 duration-1000"
        >
          Submit
          <svg
            className="inline-block ml-2 mb-1 w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </form>
      <Resume />
    </div>
  );
};

export default Contact;
