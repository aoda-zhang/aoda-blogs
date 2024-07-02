import React, { FC, memo } from "react";

import { PostItemType } from "@/app/tutorials/types";

import styles from "./index.module.scss";
const TutorialItem: FC<PostItemType> = (item: PostItemType) => {
  return (
    <div className={styles.title}>
      <span className={styles.index}>{item?.index}</span>
      <span>{item?.title}</span>
    </div>
  );
};
export default memo(TutorialItem);
