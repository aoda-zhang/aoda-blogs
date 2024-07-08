"use client";
import React, { FC, memo, useMemo } from "react";
import Link from "next/link";

import blogRouters from "@/docs/blogs/router";
import pageKeys from "@/constants/pageKey";
import LanguageKeys from "@/constants/languageKeys";
import globalStore from "@/store/globalStore";

import BlogCard from "./components/BlogCard";
import styles from "./index.module.scss";
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
        <Link
          href={{
            pathname: `/${pageKeys.blog}/${item?.path}`,
            query: item,
          }}
          className={styles.card}
          key={item?.path}
        >
          <BlogCard {...item} />
        </Link>
      ))}
    </div>
  );
};
export default memo(Blog);
