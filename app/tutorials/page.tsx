"use client";
import { useTranslation } from "next-i18next";
import { memo } from "react";

import globalStore from "@/store/globalStore";
import tutorialRouters from "@/docs/tutorials/router";

import TutorialCard from "./components/TutorialCard";

const TutorialHome=()=> {
  const locale = globalStore(state => state?.locale);
  const { t } = useTranslation("common");
  return (
    <div>
      {tutorialRouters?.[locale]?.map((post, index) => (
        <TutorialCard {...post} key={post?.title} index={index} />
      ))}
      <div>{t("common.header.about")}</div>
    </div>
  );
}
export default memo(TutorialHome)
