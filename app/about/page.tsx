import React, { FC, memo } from "react";

import AboutPost from "./index.mdx";
import styles from "./index.module.scss";
const About: FC = () => {
  return (
    <div className={styles.about}>
      <AboutPost />
    </div>
  );
};
export default memo(About);
