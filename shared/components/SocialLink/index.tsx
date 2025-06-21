import React, { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";

import email from "@/public/images/email.svg";
import linkedin from "@/public/images/linkedin.svg";
import github from "@/public/images/github.svg";

import styles from "./index.module.scss";

const LinkOptions = [
  {
    href: "https://github.com/aoda-zhang",
    src: github,
  },
  {
    href: "https://www.linkedin.com/in/aodazhang",
    src: linkedin,
  },
  {
    href: "mailto:aodazhang666@gmail.com",
    src: email,
    text: "aodazhang666@gmail.com",
  },
];

const SocialLink: FC = () => {
  return (
    <div className={styles.social}>
      {LinkOptions?.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkWrapper}
        >
          <Image className={styles.icon} src={item.src} alt="" />
          {item?.text && <span>{item?.text}</span>}
        </Link>
      ))}
      <span></span>
    </div>
  );
};
export default memo(SocialLink);
