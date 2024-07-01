import React, { FC, memo } from "react";

import TriggerTheme from "../TtiggerTheme";

import styles from "./index.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <TriggerTheme />
    </div>
  );
};
export default memo(Footer);
