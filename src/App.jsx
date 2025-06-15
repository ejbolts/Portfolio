import About from "./components/About";
import BackgroundParticles from "./components/BackgroundParticles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Projects from "./components/ProjectList";
import MainProject from "./components/MainProject";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="absolute inset-0 bg-white dark:bg-black duration-1000">
      <BackgroundParticles />
      <div className="overflow-y-scroll fixed inset-0 flex justify-center sm:px-8 z-[100]">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full">
            <Navbar />
            <div className="font-inter backdrop-blur-sm bg-zinc-200/[.7] ring-1 ring-zinc-300 dark:bg-zinc-900/[.94] dark:ring-zinc-700 duration-1000">
              <Introduction />
              <MainProject />
              <Projects />
              <About />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
