import { PostItemType } from "@/types";
import LanguageKeys from "@/constants/languageKeys";

const tutorialRouters: Record<LanguageKeys, PostItemType[]> = {
  [LanguageKeys.en]: [
    {
      title: "Preparation",
      desc: "Man,are you ready to start your full-stuck learning ? let us from here  to open your full-stack life!",
      postPath: "1",
      tags: ["git", "node", "CRA"],
      date: "2023-10-12",
    },
    {
      title: "Engineering Front-End",
      desc: "Man,are you ready to start your full-stuck learning ? let us from here  to open your full-stack life!",
      postPath: "2",
      tags: ["react", "husky"],
      date: "2023-10-12",
    },
  ],
  [LanguageKeys.zh]: [
    {
      title: "准备工作",
      desc: "伙计,准备好开始你的全栈学习之旅了吗?让我们从这里开始,开启你的全栈生涯!",
      postPath: "1",
      tags: ["git", "node", "CRA"],
      date: "2023-10-12",
    },
    {
      title: "前端工程化",
      desc: "伙计,准备好开始你的全栈学习之旅了吗?让我们从这里开始,开启你的全栈生涯!",
      postPath: "2",
      tags: ["git", "node", "CRA"],
      date: "2023-10-12",
    },
  ],
};
export default tutorialRouters;
