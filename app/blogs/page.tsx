"use client";
import React, { FC, memo, useMemo } from "react";
import styles from "./index.module.scss";
import blogRouters from "@/docs/blogs/router";
import BlogCard from "./components/BlogCard";
import Link from "next/link";
import pageKeys from "@/constants/pageKey";
import LanguageKeys from "@/constants/languageKeys";
import globalStore from "@/store/globalStore";
const Blog: FC = () => {
  const language = globalStore(state => state?.language);
  const getBlogRouters = useMemo(() => {
    return blogRouters?.map(item => ({
      ...(item ?? {}),
      path:
        language === LanguageKeys.zh_CN
          ? `${item?.path}.${LanguageKeys.zh_CN}`
          : item?.path,
    }));
  }, [language]);
  return (
    <div className={styles.blog}>
      {getBlogRouters?.map(item => (
        <Link href={`/${pageKeys.blog}/${item?.path}`} className={styles.card}>
          <BlogCard {...item} />
        </Link>
      ))}
    </div>
  );
};
export default memo(Blog);
