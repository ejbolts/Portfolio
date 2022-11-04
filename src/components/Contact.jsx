const Contact = () => {
  return (
    <div className="flex justify-center pb-10">
      <form
        action="https://getform.io/f/8b086558-47d4-49d0-852d-ec8c22da40f7"
        method="POST"
        class="flex flex-col w-full md:w-7/12"
      >
        <h1 class="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white ">
          Contact
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          class="p-2 bg-transparent border-2 rounded-md focus:outline-none border-zinc-300  dark:border-zinc-700 text-gray-600 dark:text-white duration-300"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          class="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none border-zinc-300  dark:border-zinc-700 text-gray-600 dark:text-white duration-300"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="10"
          class="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none border-zinc-300  dark:border-zinc-700 text-gray-600 dark:text-white duration-300"
        ></textarea>
        <button
          type="submit"
          class="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-rose-600 to-indigo-500 drop-shadow-md hover:stroke-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
