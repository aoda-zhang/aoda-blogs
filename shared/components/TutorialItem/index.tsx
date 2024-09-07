import React, { FC, memo } from "react";

import { PostItemType } from "@/types";

import styles from "./index.module.scss";
import classNames from "classnames";
import Link from "next/link";
import pageKeys from "@/constants/pageKey";
import LanguageKeys from "@/constants/languageKeys";
type Props = PostItemType & {
  className?: string;
  locale: LanguageKeys;
  isShowDesc?: boolean;
  onItemClick?: () => void;
};
const TutorialItem: FC<Props> = ({ isShowDesc = true, ...item }) => {
  return (
    <Link
      onClick={item?.onItemClick}
      className={classNames([styles.tutorialItem, item?.className])}
      href={`/${pageKeys.tutorial}/${item?.locale}/${item?.postPath}`}
    >
      <p className={styles.title}>
        <span className={styles.index}>{item?.index}</span>
        <span className={styles.text}>{item?.title}</span>
      </p>
      {isShowDesc && <p className={styles.desc}>{item?.desc}</p>}
    </Link>
  );
};
export default memo(TutorialItem);
