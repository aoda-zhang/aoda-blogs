import { PostItemType } from "@/app/tutorials/types";
import Link from "next/link";
import React, { FC, memo } from "react";
import styles from "./index.module.scss";
import pageKeys from "@/constants/pageKey";
const PostItemCard: FC<PostItemType> = item => {
  return (
    <div className={styles.postItem}>
      <Link href={`/${pageKeys.tutorial}/${item?.path}`}>
        <div className={styles.title}>
          <span className={styles.index}>{item?.index}</span>
          <span>{item?.title}</span>
        </div>
        <div className={styles.desc}>{item?.desc}</div>
      </Link>
    </div>
  );
};
export default memo(PostItemCard);
