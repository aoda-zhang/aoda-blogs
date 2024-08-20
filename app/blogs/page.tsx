"use client";
import React, { FC, memo } from "react";
import Link from "next/link";

import blogRouters from "@/docs/blogs/router";
import pageKeys from "@/constants/pageKey";
import globalStore from "@/store/globalStore";

import BlogCard from "./components/BlogCard";
import styles from "./index.module.scss";
const Blog: FC = () => {
  const locale = globalStore(state => state?.locale);
  return (
    <div className={styles.blog}>
      {blogRouters?.map(item => (
        <Link
          href={`/${pageKeys.blog}/${locale}/${item?.postPath}`}
          className={styles.card}
          key={item?.postPath}
        >
          <BlogCard {...item} />
        </Link>
      ))}
    </div>
  );
};
export default memo(Blog);
