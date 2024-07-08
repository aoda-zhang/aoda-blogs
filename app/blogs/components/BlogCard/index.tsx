import React, { FC, memo } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { PostItemType } from "@/types";
const BlogCard: FC<PostItemType> = item => {
  return (
    <div className={styles.blogCard}>
      <Image
        src={item?.coverPath}
        alt={""}
        className={styles.conver}
        width={260}
        height={180}
      />
      <p className={styles.title}>{item.title}</p>
      <p className={styles.desc}>{item?.desc}</p>
    </div>
  );
};
export default memo(BlogCard);
