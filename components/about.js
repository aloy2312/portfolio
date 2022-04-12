import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className={styles.container}>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className={styles.textbox}
      >
        <div>
          <div className={styles.aboutTitle}>About me</div>
          <p className={styles.aboutText}>
            Labore sit sint consectetur minim irure tempor et incididunt magna
            commodo velit dolor reprehenderit.
          </p>
          <p className={styles.aboutText}>
            Incididunt consectetur elit consectetur sunt. Nisi laboris
            reprehenderit ea tempor sunt elit irure.
          </p>

          <p className={styles.aboutText}>
            Mollit eu pariatur excepteur et ullamco fugiat in aliqua.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="400"
        className={styles.imageBox}
      >
        <Image
          priority
          src="/images/profile.jpg"
          width={360}
          height={380}
          alt="Aloysius Tan"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default About;
