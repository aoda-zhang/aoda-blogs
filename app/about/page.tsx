'use client'
import React, { FC, memo } from "react";
import { Metadata } from "next";

import AboutPost from "@/docs/about/index.mdx";
import AboutPostZH from "@/docs/about/index.zh.mdx";
import globalStore from "@/store/globalStore";
import LanguageKeys from "@/constants/languageKeys";

import styles from "./index.module.scss";

const metadata:Metadata = {
  title: 'About Aoda',
  description: 'Master frontend and backend technologies based on JavaScript and Node.js, and broaden your horizons as a software developer !',
  keywords: 'Aoda,Full-Stack,From Front-end to Full-Stack, 前端,全栈,从前端到全栈'
};
const About: FC = () => {
  const locale =globalStore(state=>state.locale)
  return (
    <div className={styles.about}>
      { locale===LanguageKeys.zh? <AboutPostZH/> :<AboutPost /> }  
    </div>
  );
};
export default memo(About);
