"use client";
import React, { FC, memo } from "react";

import globalStore from "@/store/globalStore";
import LanguageKeys from "@/constants/languageKeys";
import TitlePost from "@/docs/home/title.mdx";
import TitlePostZH from "@/docs/home/title.zh_CN.mdx";

import styles from "./home/index.module.scss";
const Home: FC = () => {
  const language = globalStore(state => state.language);
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        {language === LanguageKeys.zh_CN ? <TitlePostZH /> : <TitlePost />}
      </div>
    </div>
  );
};
export default memo(Home);
