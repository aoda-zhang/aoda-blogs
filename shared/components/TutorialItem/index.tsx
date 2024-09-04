import React, { FC, memo } from "react";

import { PostItemType } from "@/types";

import styles from "./index.module.scss";
const TutorialItem: FC<PostItemType> = (item: PostItemType) => {
  return (
    <div className={styles.tutorialItem}>
      <span className={styles.index}>{item?.index}</span>
      <span className={styles.title}>{item?.title}</span>
    </div>
  );
};
export default memo(TutorialItem);
