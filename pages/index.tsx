import React, { useEffect } from "react";
import Layout from "@/shared/components/layout";
import { MDFilesType, RoutePath } from "@/shared/types";
import Home from "./home";
import getMDFileContent from "@/shared/utils/getMDContents";
import globalStore from "@/shared/globalStore";
const Index: React.FC<{ datas: MDFilesType }> = ({ datas }) => {
  const { setLatestPosts, setHomePost, setAllPosts } = globalStore();
  useEffect(() => {
    // There only show 2 frontEnt posts and 2 backEnd posts
    let latestFrontEndPosts = datas?.frontEnd ?? [];
    if (Number(datas?.frontEnd?.length) > 2) {
      latestFrontEndPosts = datas?.frontEnd?.slice(-2) ?? [];
    }
    let latestBackEndPosts = datas?.backEnd ?? [];
    if (Number(datas?.backEnd?.length) > 2) {
      latestBackEndPosts = datas?.backEnd?.slice(-2) ?? [];
    }
    setLatestPosts([...latestFrontEndPosts, ...latestBackEndPosts]);
    setHomePost(datas?.home?.[0] ?? { content: "" });
    setAllPosts(datas ?? {});
  }, [
    datas,
    datas?.backEnd,
    datas?.frontEnd,
    datas?.home,
    setHomePost,
    setLatestPosts,
    setAllPosts,
  ]);
  return <Layout>{<Home />}</Layout>;
};
export default Index;
export function getStaticProps() {
  return getMDFileContent([
    { path: `contents/${RoutePath.home}`, name: RoutePath.home },
    { path: `contents/${RoutePath.frontEnd}`, name: RoutePath.frontEnd },
    { path: `contents/${RoutePath.backEnd}`, name: RoutePath.backEnd },
    { path: `contents/${RoutePath.about}`, name: RoutePath.about },
  ]);
}
