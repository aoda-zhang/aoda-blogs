"use client";
import React, { FC, memo, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import Menu from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

import lightTheme from "@/public/images/moon.svg";
import dayTheme from "@/public/images/sun.svg";
import globalStore from "@/store/globalStore";
import menuKeys from "@/constants/menuKeys";
import languageLightIcon from "@/public/images/light_language.png";
import me from "@/public/images/me.webp";
import LanguageKeys from "@/constants/languageKeys";
import languageIcon from "@/public/images/language.png";

import styles from "./index.module.scss";

const Header: FC = () => {
  const {
    isDarkMode,
    setLocale,
    setDarkMode,
    locale = LanguageKeys.en,
  } = globalStore();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const RightMenu = () => {
    const headerMenuOptions = useMemo(() => {
      return menuKeys?.[locale];
    }, []);
    return (
      <>
        {headerMenuOptions?.map(item => (
          <Link key={item.key} href={item.href} className={styles.menuItem}>
            {item.key}
          </Link>
        ))}
        <Image
          className={styles.icon}
          src={isDarkMode ? dayTheme : lightTheme}
          width={25}
          alt={""}
          onClick={setDarkMode}
        />
      </>
    );
  };

  return (
    <>
      <div className={classnames([styles.left, styles.center])}>
        <Link href={"/"} className={styles.avatar}>
          <Image src={me} alt={""} width={30} height={30} />
          <span>{"Aoda's blog"}</span>
        </Link>

        <Menu className={styles.mobileShow} onClick={toggleDrawer(true)} />
      </div>
      <div className={classnames([styles.right, styles.center])}>
        <RightMenu />
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <div className={styles.drawMenu}>
          <RightMenu />
        </div>
      </Drawer>
    </>
  );
};
export default memo(Header);
