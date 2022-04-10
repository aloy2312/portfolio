import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textbox}>
        <div>
          <div className={styles.aboutTitle}>About me</div>
          <p className={styles.aboutText}>
            Labore sit sint consectetur minim irure tempor et incididunt magna
            commodo velit dolor reprehenderit.
          </p>
          <p className={styles.aboutText}>
            Incididunt consectetur elit consectetur sunt.
          </p>
          <p className={styles.aboutText}>
            Irure laborum culpa occaecat cupidatat elit reprehenderit aliquip.
            Voluptate mnim sint labore consequat eiusmod proident quis nisi
            occaecat consequat elit pariatur occaecat. Ea cillum ipsum sunt ut
            consequat dolor.
          </p>
          <p className={styles.aboutText}>
            Mollit eu pariatur excepteur et ullamco fugiat in aliqua.
          </p>
        </div>
      </div>
      <div className={styles.imageBox}>
        <Image
          priority
          src="/images/profile.jpg"
          width={340}
          height={380}
          alt="Aloysius Tan"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default about;
