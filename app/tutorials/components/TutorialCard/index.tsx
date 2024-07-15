import Link from "next/link";
import React, { FC, memo } from "react";

import pageKeys from "@/constants/pageKey";
import { PostItemType } from "@/types";
import TutorialItem from "@/app/tutorials/components/TutorialItem";

import styles from "./index.module.scss";

const TutorialCard: FC<PostItemType> = item => {
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
export default memo(TutorialCard);
