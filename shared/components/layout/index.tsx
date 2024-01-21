import React, { ReactNode, memo } from "react";
import styles from "./index.module.scss";
import Menu from "../menu";
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Menu />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
export default memo(Layout);
