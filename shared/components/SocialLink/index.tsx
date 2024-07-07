import React, { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";

import wechat from "@/public/images/wechat.svg";
import facebook from "@/public/images/facebook.svg";
import email from "@/public/images/email.svg";
import linkin from "@/public/images/link.svg";
import github from "@/public/images/github.svg";

import styles from "./index.module.scss";

const SocialLink: FC = () => {
  return (
    <div className={styles.social}>
      <Link href={"https://github.com/aoda-zhang"}>
        <Image className={styles.icon} src={github} alt={""} />
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100081490454983">
        <Image className={styles.icon} src={facebook} alt={""} />
      </Link>
      <Link href="https://www.linkedin.com/in/aodazhang">
        <Image className={styles.icon} src={linkin} alt={""} />
      </Link>
      <Link href="mailto:aodazhang666@gmail.com">
        <Image className={styles.icon} src={email} alt={""} />
      </Link>
      <Link href="https://raw.githubusercontent.com/aoda-zhang/aoda-blogs/master/public/images/wechatLink.JPG">
        <Image className={styles.icon} src={wechat} alt={""} />
      </Link>
    </div>
  );
};
export default memo(SocialLink);
