import { useState, useEffect } from "react";
import Contact from "./Contact";
import EducationAndExperience from "./EducationAndExperience";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import ToggleTheme from "./ToggleTheme";
const PortfolioTemplate2 = () => {
    // const location = useLocation();
  
    // useEffect(() => {
    //   window.HSStaticMethods.autoInit();
    // }, [location.pathname]);
    const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || "dark");

	useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);

	const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };


  return (
    <>
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <ToggleTheme switchTheme={switchTheme} />
        <Hero />
        <Projects />
				<EducationAndExperience />
        <Skills />
        <Contact />

        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <Footer theme={theme} />
      </div>
    </div>
    </>
  );
};

export default PortfolioTemplate2;
