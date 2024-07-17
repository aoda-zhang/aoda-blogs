"use client";
import React, { FC, memo } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import "@/shared/styles/layout.scss";
import globalStore from "@/store/globalStore";

const metadata:Metadata = {
  title: 'From Front-end to Full-Stack',
  description: 'Master frontend and backend technologies based on JavaScript and Node.js, and broaden your horizons as a software developer !',
  keywords: 'Front-end,Full-Stack,From Front-end to Full-Stack, 前端,全栈,从前端到全栈'
};

const RootLayout: FC<{
  children: React.ReactNode;
  params: { locale: string };
}> = ({ children}) => {
  const {isDarkMode,locale} = globalStore();
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
