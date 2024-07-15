import LanguageKeys from "@/constants/languageKeys";
import { PostItemType } from "@/types";

const blogRouters: Record<LanguageKeys, PostItemType[]> = {
  [LanguageKeys.en]: [
    {
      title: "How to use scss to develop responsive pages",
      desc: "Most of the time, our pages only run on one device, web, mobile or desktop, but what do we do if we want to run on two devices at the same time? Responsiveness means writing code to match different platforms",
      postPath: "set_responsive_page_by_scss",
      coverPath: "/images/nature1.png",
      tags: ["SCSS", "React"],
      date: "2023-10-12",
    },
    {
      title: "How to use function in react class components ?",
      desc: "This is no joke, this is a fact, most React beginners will face these methodological issues",
      postPath: "use_function_in_react_class_components",
      coverPath: "/images/nature2.JPG",
      tags: ["SCSS", "React"],
      date: "2023-10-12",
    },
  ],
  [LanguageKeys.zh]: [
    {
      title: "如何使用SCSS设计响应式页面?",
      desc: "Most of the time, our pages only run on one device, web, mobile or desktop, but what do we do if we want to run on two devices at the same time? Responsiveness means writing code to match different platforms",
      postPath: "set_responsive_page_by_scss.zh",
      coverPath: "/images/nature1.png",
      tags: ["SCSS", "React"],
      date: "2023-10-12",
    },
    {
      title: "How to use function in react class components ?",
      desc: "This is no joke, this is a fact, most React beginners will face these methodological issues",
      postPath: "use_function_in_react_class_components",
      coverPath: "/images/nature2.JPG",
      tags: ["SCSS", "React"],
      date: "2023-10-12",
    },
  ],
};
export default blogRouters;
