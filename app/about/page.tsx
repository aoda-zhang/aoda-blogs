"use client";
import React, { FC, memo } from "react";
import Image from "next/image";

import me from "@/public/images/me.webp";
import SocialLink from "@/shared/components/SocialLink";

import styles from "./index.module.scss";

const About: FC = () => {
  return (
    <>
      <div className={styles.profile}>
        <Image className={styles.me} src={me} alt={""} />
        <div className={styles.introduce}>
          <div className={styles.summary}>
            {/* <p>Hi 👋 , I'm Aoda from 🇨🇳</p> */}
            <p>
              I began my journey in web development with a strong passion for
              building digital products. Since 2021, I’ve grown into a
              full-stack developer, focusing on the React, Node.js, and MongoDB
              stack. I genuinely enjoy working across the entire application
              lifecycle—from frontend to backend—which has given me a deeper and
              more holistic understanding of software development.
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
              <span className={styles.number}>8+</span>
              <span>Technologies mastered</span>
            </div>
          </div>
          <SocialLink />
        </div>
      </div>
      <div className={styles.skills}></div>
      <div className={styles.experience}></div>
    </>
  );
};
export default memo(About);
