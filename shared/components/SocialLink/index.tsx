import React, { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";

import github from "@/public/images/github.png";
import wechat from "@/public/images/wechat.png";
import twiter from "@/public/images/x.png";
import email from "@/public/images/email.png";
import linkin from "@/public/images/link.png";

import styles from "./index.module.scss";
const SocialLink: FC = () => {
  return (
    <div className={styles.social}>
      <Link href={""}>
        <Image className={styles.icon} src={github} alt={""} />
      </Link>
      <Link href={""}>
        <Image className={styles.icon} src={wechat} alt={""} />
      </Link>
      <Link href={""}>
        <Image className={styles.icon} src={linkin} alt={""} />
      </Link>
      <Link href={""}>
        <Image className={styles.icon} src={twiter} alt={""} />
      </Link>
      <Link href={""}>
        <Image className={styles.icon} src={email} alt={""} />
      </Link>
    </div>
  );
};
export default memo(SocialLink);
