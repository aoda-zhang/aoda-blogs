"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import "@/shared/styles/layout.scss";
import globalStore from "@/store/globalStore";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = globalStore(state => state?.isDarkMode);
  return (
    <html lang="en">
      <body>
        <div
          id="fullStackLayout"
          className={`${isDarkMode && "fullStackLayout_dark"}`}
        >
          <Header />
          <div className="content">
            {children}
            <SpeedInsights />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
