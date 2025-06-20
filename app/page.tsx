import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

import me from "@/public/images/me.webp";
import pageKeys from "@/constants/pageKey";

import styles from "./page.module.scss";

function Home() {
  return (
    <div className={styles.homeContent}>
      <Image className={styles.left} src={me} alt={""} />

      <div className={styles.right}>
        <p>
          <span>HI THERE! 👋</span>
          <span style={{ marginLeft: "10px" }}>I&#39;M</span>
        </p>
        <p className={classNames([styles.title, styles.hightLight])}>
          Aoda Zhang
        </p>
        <p className={classNames([styles.subTitle, styles.hightLight])}>
          Full Stack Software Developer
        </p>
        <p className={styles.content}>
          MERN-focused full-stack developer with 8+ years of experience, skilled
          in React, NestJS, MongoDB, and Azure, building scalable and modern web
          applications.
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
