"use client";
import React, { FC, memo } from "react";
import { Metadata } from "next";

import AboutPost from "@/docs/about/index.mdx";
import AboutPostZH from "@/docs/about/index.zh.mdx";
import globalStore from "@/store/globalStore";
import LanguageKeys from "@/constants/languageKeys";

import styles from "./index.module.scss";

const About: FC = () => {
  const locale = globalStore(state => state.locale);
  return (
    <div className={styles.about}>
      {locale === LanguageKeys.zh ? <AboutPostZH /> : <AboutPost />}
    </div>
  );
};
export default memo(About);
