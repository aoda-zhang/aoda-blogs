"use client";
import { useMemo } from "react";

import PostItemCard from "@/shared/components/PostItemCard";
import globalStore from "@/store/globalStore";
import LanguageKeys from "@/constants/languageKeys";

import tutorialRouters from "./router";

export default function PostsPage() {
  const language = globalStore(state => state?.language);
  const getTutorialRouters = useMemo(() => {
    return tutorialRouters?.map(item => ({
      ...(item ?? {}),
      path:
        language === LanguageKeys.zh_CN
          ? `${item?.path}.${LanguageKeys.zh_CN}`
          : item?.path,
    }));
  }, [language]);
  return (
    <div>
      {getTutorialRouters?.map((post, index) => (
        <PostItemCard {...post} key={post?.title} index={index} />
      ))}
    </div>
  );
}
