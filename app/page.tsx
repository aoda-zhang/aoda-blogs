"use client";
import React, { FC, memo } from "react";

import globalStore from "@/store/globalStore";
import LanguageKeys from "@/constants/languageKeys";

import styles from "./home/index.module.scss";
import TitlePost from "./home/docs/title.mdx";
import TitlePostZH from "./home/docs/title.zh_CN.mdx";
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
