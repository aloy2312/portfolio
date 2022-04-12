import React from "react";
import Image from "next/image";
import styles from "../styles/projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        className={styles.projectsTitle}
      >
        Projects
      </div>
      {/* 3 Projects  */}
      <div className={styles.projectsGroups}>
        {/* Project 1 */}
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className={styles.projectsGroup1}
        >
          <div className={styles.projectsTextLeft}>
            <div className={styles.projectsName}>Project Name</div>
            <div className={styles.projectsInfo}>
              Commodo deserunt magna sunt non ullamco nisi proident. Anim ad
              laboris tempor exercitation ad eiusmod velit sunt velit anim. Elit
              ut sunt dolor consequat laboris cupidatat ea dolore sit eiusmod
              enim tempor nisi et. In veniam anim eiusmod eiusmod est nisi Lorem
              anim ut et.
            </div>
            <div className={styles.tags}>
              <span className={styles.tag}>Java</span>
              <span className={styles.tag}>App Dev</span>
              <span className={styles.tag}>Android</span>
            </div>
          </div>
          <div className={styles.imageBoxRight}>
            <Image
              priority
              src="/images/profile.jpg"
              width={500}
              height={375}
              alt="Aloysius Tan"
              className={styles.image}
            />
          </div>
        </div>
        {/* Project 1 */}

        <hr
          data-aos="fade-in"
          data-aos-duration="100"
          className={styles.horizontal}
        />

        {/* Project 2 */}
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className={styles.projectsGroup2}
        >
          <div className={styles.imageBoxLeft}>
            <Image
              priority
              src="/images/profile.jpg"
              width={500}
              height={375}
              alt="Aloysius Tan"
              className={styles.image}
            />
          </div>
          <div className={styles.projectsTextRight}>
            <div className={styles.projectsName}>Project Name</div>
            <div className={styles.projectsInfo}>
              Commodo deserunt magna sunt non ullamco nisi proident. Anim ad
              laboris tempor exercitation ad eiusmod velit sunt velit anim. Elit
              ut sunt dolor consequat laboris cupidatat ea dolore sit eiusmod
              enim tempor nisi et. In veniam anim eiusmod eiusmod est nisi Lorem
              anim ut et.
            </div>
            <div className={styles.tags}>
              <span className={styles.tag}>Java</span>
              <span className={styles.tag}>App Dev</span>
              <span className={styles.tag}>Android</span>
            </div>
          </div>
        </div>
        {/* Project 2 */}

        <hr
          data-aos="fade-in"
          data-aos-duration="100"
          className={styles.horizontal}
        />

        {/* Project 3 */}
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className={styles.projectsGroup1}
        >
          <div className={styles.projectsTextLeft}>
            <div className={styles.projectsName}>Project Name</div>
            <div className={styles.projectsInfo}>
              Commodo deserunt magna sunt non ullamco nisi proident. Anim ad
              laboris tempor exercitation ad eiusmod velit sunt velit anim. Elit
              ut sunt dolor consequat laboris cupidatat ea dolore sit eiusmod
              enim tempor nisi et. In veniam anim eiusmod eiusmod est nisi Lorem
              anim ut et.
            </div>
            <div className={styles.tags}>
              <span className={styles.tag}>Java</span>
              <span className={styles.tag}>App Dev</span>
              <span className={styles.tag}>Android</span>
            </div>
          </div>
          <div className={styles.imageBoxRight}>
            <Image
              priority
              src="/images/profile.jpg"
              width={500}
              height={375}
              alt="Aloysius Tan"
              className={styles.image}
            />
          </div>
        </div>
        {/* Project 3 */}
      </div>
      <div
        data-aos="fade-in"
        data-aos-duration="600"
        data-aos-delay="400"
        data-aos-easing="ease-out"
        className={styles.githubDiv}
      >
        <a href="https://github.com/aloysiustanrs">
          <button className={styles.github}>SEE MORE ON GITHUB</button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
