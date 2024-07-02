"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import "@/shared/styles/global.scss";
import globalStore from "@/store/globalStore";
import ThemeKeys from "@/constants/themeKeys";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = globalStore();
  return (
    <html lang="en">
      <body>
        <div className={`layout ${ThemeKeys?.[theme]}`}>
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
