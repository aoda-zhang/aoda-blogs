import React, { useEffect } from "react";
import Layout from "@/shared/components/Layout";
import { MDFilesType, RoutePath } from "@/shared/types";
import Home from "./home";
import getMDFileContent from "@/shared/utils/getMDContents";
import globalStore from "@/shared/globalStore";
const Index: React.FC<{ datas: MDFilesType }> = ({ datas }) => {
  const { setHomePost, setAllPosts } = globalStore();
  useEffect(() => {
    setHomePost(datas?.home?.[0] ?? { content: "" });
    setAllPosts(datas ?? {});
  }, [datas, datas?.blogs, datas?.home, setHomePost, setAllPosts]);
  return <Layout>{<Home />}</Layout>;
};
export default Index;
export function getStaticProps() {
  const paths = Object.keys(RoutePath).map(key => ({
    path: `contents/${key}`,
    name: key as RoutePath,
  }));
  return getMDFileContent(paths);
}
