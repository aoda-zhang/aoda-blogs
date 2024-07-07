import React, { FC, memo } from "react";

import SocialLink from "../SocialLink";

import styles from "./index.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        {`Copyright © ${new Date().getFullYear()} by Aoda. | All rights reserved.`}
      </div>
      <div className={styles.right}>
        <SocialLink />
      </div>
    </div>
  );
};
export default memo(Footer);
