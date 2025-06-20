"use client";
import React, { FC, memo } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import classNames from "classnames";

import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import "./layout.scss";
import globalStore from "@/store/globalStore";

const RootLayout: FC<{
  children: React.ReactNode;
  params: { locale: string };
}> = ({ children }) => {
  const { isDarkMode, locale } = globalStore();
  return (
    <html lang={locale}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <div
          id="fullStackLayout"
          className={classNames([isDarkMode ? "fullStackLayout_dark" : ""])}
        >
          <div className="headerBox">
            <Header />
          </div>

          <div className="contentBox">
            {children}
            <SpeedInsights />
          </div>

          <div className="footerBox">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default memo(RootLayout);
