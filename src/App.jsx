import DarkModeBtn from "./components/DarkModeBtn";
import Introdcution from "./components/Introduction";
import Projects from "./components/ProjectList";

function App() {
  return (
    <div className="overflow-y-scroll  fixed inset-0 flex justify-center sm:px-8 bg-white dark:bg-black duration-300">
      <div className="flex w-full max-w-7xl lg:px-8 ">
        <div className="w-full">
          <div className="font-inter bg-zinc-200 ring-1 ring-zinc-400 dark:bg-zinc-900 dark:ring-zinc-700  duration-300">
            <DarkModeBtn />
            <Introdcution />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
