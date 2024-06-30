import React, { FC, memo } from "react";
import AboutPost from "./index.mdx";
import styles from "./index.module.scss";
const About: FC = () => {
  return (
    <div>
      <AboutPost />
    </div>
  );
};
export default memo(About);
