// Components
import Navigation from "../components/nav";
import Navigation2 from "../components/nav2";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Links from "../components/links";

// Styles
import Indexstyles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={Indexstyles.bgdark}>
      <div className={Indexstyles.container}>
        <Navigation />
        {/* <Navigation2 /> */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Links />
      </div>
    </div>
  );
}
