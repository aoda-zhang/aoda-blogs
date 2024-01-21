import React, { memo } from "react";
import Layout from "@/shared/components/Layouts";
import styles from "./index.module.scss";
import MDRender from "@/shared/components/MDRender";
import globalStore from "@/shared/globalStore";
const Blogs: React.FC = () => {
  const { allPosts } = globalStore();
  return (
    <Layout>
      <div className={styles.blogs}>
        <MDRender datas={allPosts?.blogs ?? []} />
      </div>
    </Layout>
  );
};
export default memo(Blogs);
