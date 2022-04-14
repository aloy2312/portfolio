// Components
import Navigation from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Links from "../components/links";
import Footer from "../components/footer";

// Styles
import Indexstyles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={Indexstyles.bgdark}>
      <div className={Indexstyles.container}>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Links />
        <Footer />
      </div>
    </div>
  );
}
