"use client";
import React, { FC, memo } from "react";

import globalStore from "@/store/globalStore";
import LanguageKeys from "@/constants/languageKeys";
import TitlePost from "@/docs/home/index.mdx";
import TitlePostZH from "@/docs/home/index.zh_CN.mdx";

import styles from "./home/index.module.scss";


const Home: FC = () => {
  const locale = globalStore(state => state.locale);
  return (
    <div className={styles.home}>
      {locale === LanguageKeys.zh ? <TitlePostZH /> : <TitlePost />}
    </div>
  );
};
export default memo(Home);
