"use client";
import { memo } from "react";

import globalStore from "@/store/globalStore";
import tutorialRouters from "@/docs/tutorials/router";

import TutorialCard from "./components/TutorialCard";

const TutorialHome=()=> {
  const locale = globalStore(state => state?.locale);
  return (
    <div>
      {tutorialRouters?.[locale]?.map((post, index) => (
        <TutorialCard {...post} key={post?.title} index={index} />
      ))}
    </div>
  );
}
export default memo(TutorialHome)
