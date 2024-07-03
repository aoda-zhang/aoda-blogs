import React, { FC, memo } from "react";
import Link from "next/link";

import SocialLink from "../SocialLink";

import styles from "./index.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        {`Copyright © ${new Date().getFullYear()} | All rights reserved.`}
      </div>
      <div className={styles.right}>
        <SocialLink />
      </div>
    </div>
  );
};
export default memo(Footer);
