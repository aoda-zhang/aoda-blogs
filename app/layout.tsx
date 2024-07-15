"use client";
import React, { FC, memo } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import "@/shared/styles/layout.scss";
import globalStore from "@/store/globalStore";

const RootLayout: FC<{
  children: React.ReactNode;
  params: { locale: string };
}> = ({ children, params: { locale } }) => {
  const isDarkMode = globalStore(state => state?.isDarkMode);
  return (
    <html lang={locale}>
      <body>
        <div
          id="fullStackLayout"
          className={`${isDarkMode && "fullStackLayout_dark"}`}
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
