import Link from "next/link";
import React, { FC, memo } from "react";

import { PostItemType } from "@/app/tutorials/types";
import pageKeys from "@/constants/pageKey";

import styles from "./index.module.scss";

const PostItemCard: FC<PostItemType> = item => {
  return (
    <Link
      href={`/${pageKeys.tutorial}/${item?.path}`}
      className={styles.postItem}
    >
      <div className={styles.title}>
        <span className={styles.index}>{item?.index}</span>
        <span>{item?.title}</span>
      </div>
      <div className={styles.desc}>{item?.desc}</div>
    </Link>
  );
};
export default memo(PostItemCard);
