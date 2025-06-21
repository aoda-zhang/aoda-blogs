"use client";
import React, { FC, memo } from "react";
import Image from "next/image";

import me from "@/public/images/me.webp";
import reactEcoSystemDark from "@/public/images/reactEcoSystemDark.png";
import reactEcoSystemLight from "@/public/images/reactEcoSystemLight.png";
import SocialLink from "@/shared/components/SocialLink";

import styles from "./index.module.scss";
import classNames from "classnames";
import globalStore from "@/store/globalStore";

const About: FC = () => {
  const isDarkMode = globalStore(state => state.isDarkMode);
  return (
    <div className={styles.about}>
      <div className={classNames([styles.profile, styles.line])}>
        <div className={styles.me}>
          <Image className={styles.img} src={me} alt={""} />
          <SocialLink />
        </div>

        <div className={styles.introduce}>
          <div className={styles.summary}>
            <p className={styles.title}>Hi there 👋 , I'm Aoda.</p>
            <p>
              I started my journey in software development as a web developer,
              Since 2021, I’ve grown into a full-stack developer, focusing on
              the React, Node.js, and MongoDB stack. I genuinely enjoy working
              across the entire application lifecycle—from frontend to
              backend—which has given me a deeper and more holistic
              understanding of software development.
            </p>
            <p>
              Over the years, I’ve had the opportunity to work at two
              international companies, where I led and contributed to the
              architecture and development of several impactful web and mobile
              projects. I’m deeply passionate about what I do and continuously
              driven by the challenges and creativity that come with building
              software.
            </p>
          </div>
          <div className={styles.keySkill}>
            <div className={styles.hightLight}>
              <span className={styles.number}>8+</span>
              <span>Years of experience</span>
            </div>
            <div className={styles.hightLight}>
              <span className={styles.number}>14+</span>
              <span>Technologies mastered</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames([styles.skills])}>
        <p className={styles.boldText}>My Skills</p>
        <Image
          className={styles.chart}
          src={isDarkMode ? reactEcoSystemDark : reactEcoSystemLight}
          alt={""}
        />
      </div>
      <div className={styles.experience}></div>
    </div>
  );
};
export default memo(About);
