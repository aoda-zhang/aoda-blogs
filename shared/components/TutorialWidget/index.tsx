"use client";
import { memo } from "react";
import TutorialItem from "@/shared/components/TutorialItem";
import globalStore from "@/store/globalStore";
import tutorialRouters from "@/docs/tutorials/router";

import styles from "./index.module.scss";

const TutorialWidget = () => {
  const locale = globalStore(state => state.locale);
  return (
    <div className={styles.widget}>
      {tutorialRouters?.map((item, i) => (
        <TutorialItem
          locale={locale}
          {...item}
          index={i + 1}
          className={styles.item}
        />
      ))}
    </div>
  );
};
export default memo(TutorialWidget);
