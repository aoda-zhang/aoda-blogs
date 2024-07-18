import React, { FC, memo } from "react";
import Image from "next/image";

import { PostItemType } from "@/types";

import styles from "./index.module.scss";
const BlogCard: FC<PostItemType> = item => {
  return (
    <div className={styles.blogCard}>
      {
        item?.coverPath && <Image
        src={item?.coverPath}
        alt={""}
        className={styles.conver}
        width={260}
        height={180}
      />
      }
      
      <p className={styles.title}>{item.title}</p>
      <p className={styles.desc}>{item?.desc}</p>
    </div>
  );
};
export default memo(BlogCard);
