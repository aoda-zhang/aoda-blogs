"use client";
import React, { FC, memo } from "react";
import Image from "next/image";

import me from "@/public/images/me.png";
import Summary from "@/docs/about/summary.mdx";
import SummaryZH from "@/docs/about/summary.zh.mdx";
import globalStore from "@/store/globalStore";
import LanguageKeys from "@/constants/languageKeys";

import styles from "./index.module.scss";
const Profile: FC = () => {
  const locale = globalStore(state => state.locale);
  return (
    <div className={styles.profile}>
      <Image src={me} alt={""} className={styles.left} />
      <div className={styles.right}>
        {locale === LanguageKeys.zh ? <SummaryZH /> : <Summary />}
      </div>
    </div>
  );
};
export default memo(Profile);
