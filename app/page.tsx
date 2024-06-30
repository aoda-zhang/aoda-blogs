import React, { FC, memo } from "react";
import styles from "./index.module.scss";
import HomePost from "./tutorials/docs/home.mdx";
const Home: FC = () => {
  return (
    <div className={styles.home}>
      <HomePost />
    </div>
  );
};
export default memo(Home);
