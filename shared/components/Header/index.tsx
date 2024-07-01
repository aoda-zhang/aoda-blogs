"use client";
import React, { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import { Menu, MenuProps } from "antd";

import dayCat from "@/public/images/day_cat.png";
import nightCat from "@/public/images/night_cat.png";
import languageIcon from "@/public/images/language.png";
import menuKeys from "@/constants/menuKeys";
import pageKeys from "@/constants/pageKey";
import TutorialRouters from "@/app/tutorials/router";
import globalStore from "@/store/globalStore";
import ThemeKeys from "@/constants/themeKeys";

import styles from "./index.module.scss";
type MenuItem = Required<MenuProps>["items"][number];

const Header: FC = () => {
  const { theme, setLanguage, language } = globalStore();
  const getMenuItems = () => {
    const itemChildren: MenuItem[] =
      TutorialRouters?.map(item => ({
        label: item?.title,
        key: item?.title,
      })) ?? [];
    return [
      {
        label: (
          <Link href={`/${pageKeys.tutorial}`}>{menuKeys.fullStackGuide}</Link>
        ),
        forceSubMenuRender: true,
        key: menuKeys.fullStackGuide,
        children: itemChildren,
      },
    ];
  };
  return (
    <div className={styles.header}>
      <div className={classnames([styles.left, styles.center])}>
        <Link href={"/"}>
          <Image
            src={theme === ThemeKeys.dark ? dayCat : nightCat}
            alt={menuKeys.FFTF}
            width={30}
            height={30}
          />
        </Link>
        <Menu mode="horizontal" items={getMenuItems()} />
      </div>
      <div className={classnames([styles.right, styles.center])}>
        <Link href={`/${pageKeys.blog}`}>{menuKeys.blog}</Link>
        <Link href={`/${pageKeys.about}`}>{menuKeys.about}</Link>
        <Image
          src={languageIcon}
          alt={menuKeys.FFTF}
          width={20}
          height={20}
          className={styles.icon}
          onClick={() => setLanguage()}
        />
      </div>
    </div>
  );
};
export default memo(Header);
