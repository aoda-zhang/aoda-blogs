"use client";
import { useMemo } from "react";

import globalStore from "@/store/globalStore";
import LanguageKeys from "@/constants/languageKeys";
import tutorialRouters from "@/docs/tutorials/router";

import TutorialCard from "./components/TutorialCard";

export default function TutorialHome() {
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
        <TutorialCard {...post} key={post?.title} index={index} />
      ))}
    </div>
  );
}
