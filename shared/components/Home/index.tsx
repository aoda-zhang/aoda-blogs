import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

import me from "@/public/images/me.webp";
import pageKeys from "@/constants/pageKey";

import styles from "./index.module.scss";

function Home() {
  return (
    <div className={styles.homeContent}>
      <Image className={styles.left} src={me} alt={""} />

      <div className={styles.right}>
        <p>
          <span>HI THERE!</span>
          <span style={{ marginLeft: "10px" }}>I'M</span>
        </p>
        <p className={classNames([styles.title, styles.hightLight])}>Aoda</p>
        <p className={classNames([styles.subTitle, styles.hightLight])}>
          Full Stack Software Developer
        </p>
        <p className={styles.content}>
          With{" "}
          <span className={classNames([styles.hightLight, styles.number])}>
            8+
          </span>{" "}
          years of experience, I work mainly with the MERN stack, but I love
          trying new tech. If you’re hiring, I’d be happy to chat!
        </p>
        <div className={styles.buttons}>
          <span className={styles.button}>My Project</span>
          <Link className={styles.button} href={`/${pageKeys.about}`}>
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
