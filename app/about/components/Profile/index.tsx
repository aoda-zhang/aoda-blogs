import React, { FC, memo } from "react";
import Image from "next/image";

import me from "@/public/images/me.png";
import Summary from "@/docs/about/summary.mdx";

import styles from "./index.module.scss";
const Profile: FC = () => {
  return (
    <div className={styles.profile}>
      <Image src={me} alt={""} className={styles.left} />
      <div className={styles.right}>
        <Summary />
      </div>
    </div>
  );
};
export default memo(Profile);