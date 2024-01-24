import React, { memo } from "react";
import styles from "./index.module.scss";
import MDDetail from "../MDDetail";
import globalStore from "@/shared/globalStore";
import Layout from "@/shared/components/Layout";
const Daily: React.FC = () => {
  const { allPosts } = globalStore();
  return (
    <Layout>
      <>
        {allPosts && (
          <MDDetail contents={allPosts?.daily?.[0]?.content ?? ""} />
        )}
      </>
    </Layout>
  );
};
export default memo(Daily);
