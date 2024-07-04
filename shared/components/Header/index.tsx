"use client";
import React, { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";

import dayCat from "@/public/images/day_cat.png";
import nightCat from "@/public/images/night_cat.png";
import languageIcon from "@/public/images/language.png";
import languageLightIcon from "@/public/images/light_language.png";
import menuKeys from "@/constants/menuKeys";
import pageKeys from "@/constants/pageKey";
import globalStore from "@/store/globalStore";
import dayTheme from "@/public/images/sun.svg";
import lightTheme from "@/public/images/moon.svg";

import TutorialMenu from "../TutorialMenu";

import styles from "./index.module.scss";

const Header: FC = () => {
  const { isDarkMode, setLanguage, setDarkMode } = globalStore();
  return (
    <div className={styles.header}>
      <div className={classnames([styles.left, styles.center])}>
        <Link href={"/"}>
          <Image
            src={isDarkMode ? dayCat : nightCat}
            alt={menuKeys.FFTF}
            width={30}
            height={30}
          />
        </Link>
        <TutorialMenu />
      </div>
      <div className={classnames([styles.right, styles.center])}>
        <Link href={`/${pageKeys.blog}`}>{menuKeys.blog}</Link>
        <Link href={`/${pageKeys.about}`}>{menuKeys.about}</Link>
        <Image
          src={isDarkMode ? languageIcon : languageLightIcon}
          alt={menuKeys.FFTF}
          width={20}
          height={20}
          className={styles.icon}
          onClick={() => setLanguage()}
        />
        <Image
          className={styles.icon}
          src={isDarkMode ? dayTheme : lightTheme}
          width={25}
          alt={""}
          onClick={setDarkMode}
        />
      </div>
    </div>
  );
};
export default memo(Header);
