import React, { FC, memo } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import pageKeys from "@/constants/pageKey";
import menuKeys from "@/constants/menuKeys";
import Image from "next/image";
import classnames from "classnames";
const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={classnames([styles.left, styles.center])}>
        <Link href={"/"}>
          <Image
            src="/images/cat.png"
            alt={menuKeys.FFTF}
            width={30}
            height={30}
          />
        </Link>
        <Link href={`/${pageKeys.tutorial}`}>{menuKeys.fullStackGuide}</Link>
      </div>
      <div className={classnames([styles.right, styles.center])}>
        <Link href={`/${pageKeys.blog}`}>{menuKeys.blog}</Link>
        <Link href={`/${pageKeys.about}`}>{menuKeys.about}</Link>
      </div>
    </div>
  );
};
export default memo(Header);
