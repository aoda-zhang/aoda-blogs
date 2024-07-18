"use client";
import Link from "next/link";
import React, {  memo } from "react";

import pageKeys from "@/constants/pageKey";
import { PostItemType } from "@/types";
import TutorialItem from "@/shared/components/TutorialItem";
import tutorialRouters from "@/docs/tutorials/router";
import globalStore from "@/store/globalStore";

import styles from "./index.module.scss";

const TutorialWidget = () => {
    const locale = globalStore(state => state?.locale);
    const TutorialCard = (item:PostItemType) => {
        return (
          <Link
            href={`/${pageKeys.tutorial}/${item?.postPath}`}
            className={styles.postItem}
          >
            <TutorialItem {...item} />
            <div className={styles.desc}>{item?.desc}</div>
          </Link>
        );
      };
  return (
    <div className={styles.widget}>
      {tutorialRouters?.[locale]?.map((post,index) => (
        <TutorialCard key={post?.title} {...post} index={index+1} />
      ))}
    </div>
  );
};
export default memo(TutorialWidget);
