import useDarkMode from "./useDarkMode";
export default function DarkModeBtn() {
  const [colourTheme, setTheme] = useDarkMode();
  return (
    <div onClick={() => setTheme(colourTheme)} className="w-12 h-12 ml-5 mt-5">
      {colourTheme == "light" ? (
        <svg
          className="h-12  p-1 text-zinc-500 border-2 border-zinc-600 hover:border-white hover:text-white rounded-xl duration-300 cursor-pointer "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      ) : (
        <svg
          className="h-12 p-1 text-zinc-500 border-2 border-zinc-400 hover:border-black hover:text-black rounded-xl duration-300 cursor-pointer "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      )}
    </div>
  );
}
