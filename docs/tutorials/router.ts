import { PostItemType } from "@/types";
import LanguageKeys from "@/constants/languageKeys";

const tutorialRouters: Record<LanguageKeys, PostItemType[]> = {
  [LanguageKeys.en]: [
    {
      title: "develop responsive pages",
      desc: "Most of the time, our pages only run on one device, web, mobile or desktop, but what do we do if we want to run on two devices at the same time? Responsiveness means writing code to match different platforms",
      postPath: "1",
      tags: ["SCSS", "React"],
      date: "2023-10-12",
    }
  ],
  [LanguageKeys.zh]: [
    {
      title: "develop responsive pages",
      desc: "Most of the time, our pages only run on one device, web, mobile or desktop, but what do we do if we want to run on two devices at the same time? Responsiveness means writing code to match different platforms",
      postPath: "1",
      tags: ["SCSS", "React"],
      date: "2023-10-12",
    }
  ],
};
export default tutorialRouters;
