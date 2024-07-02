import React, { FC, memo } from "react";

import AboutPost from "./index.mdx";
const About: FC = () => {
  return (
    <div>
      <AboutPost />
    </div>
  );
};
export default memo(About);
