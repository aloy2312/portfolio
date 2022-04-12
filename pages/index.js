import Head from "next/head";

// Components
import Navigation from "../components/nav";
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
      <Head>
        <title>Aloysius Tan</title>
        <meta name="description" content="Hi! This is my portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Indexstyles.container}>
        <Navigation />
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
