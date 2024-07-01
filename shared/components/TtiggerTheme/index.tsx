"use client";
import React, { FC, memo } from "react";
import Image from "next/image";

import dayTheme from "@/public/images/day.png";
import lightTheme from "@/public/images/night.png";
import ThemeKey from "@/constants/themeKeys";
import globalStore from "@/store/globalStore";

import styles from "./index.module.scss";
const TriggerTheme: FC = () => {
  const setTheme = globalStore(state => state?.setTheme);
  return (
    <div className={styles.theme}>
      <Image
        className={styles.icon}
        src={lightTheme}
        width={20}
        alt={""}
        onClick={() => setTheme(ThemeKey.dark)}
      />
      <Image
        className={styles.icon}
        src={dayTheme}
        width={20}
        alt={""}
        onClick={() => setTheme(ThemeKey.light)}
      />
    </div>
  );
};
export default memo(TriggerTheme);
