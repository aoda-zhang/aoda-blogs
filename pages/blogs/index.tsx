import React, { memo } from "react";
import styles from "./index.module.scss";
import MDRender from "@/shared/components/MDRender";
import globalStore from "@/shared/globalStore";
const Blogs: React.FC = () => {
  const { allPosts } = globalStore();
  return (
    <div className={styles.blogs}>
      <MDRender datas={allPosts?.blogs ?? []} />
    </div>
  );
};
export default memo(Blogs);
