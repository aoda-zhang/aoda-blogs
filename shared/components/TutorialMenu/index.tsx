import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { FC, memo } from "react";
import Link from "next/link";

import menuKeys from "@/constants/menuKeys";
import tutorialRouters from "@/app/tutorials/router";
import pageKeys from "@/constants/pageKey";

import TutorialItem from "../TutorialItem";

import styles from "./index.module.scss";

const TutorialMenu: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const expandMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onMouseEnter={expandMenu} className={styles.title}>
        {menuKeys.fullStackGuide}
      </div>
      <Menu
        anchorEl={anchorEl}
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
      >
        {tutorialRouters?.map(item => (
          <MenuItem onClick={handleClose} key={item?.title}>
            <Link href={`/${pageKeys.tutorial}/${item?.path}`}>
              <TutorialItem {...item} />
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default memo(TutorialMenu);
