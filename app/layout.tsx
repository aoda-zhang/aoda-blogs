"use client";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import "@/shared/styles/global.scss";
import globalStore from "@/store/globalStore";
import ThemeKeys from "@/constants/themeKeys";
// import styles from "@/shared/styles/global.scss";

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
            <ThemeProvider enableSystem={true}>
              {children}
              <SpeedInsights />
            </ThemeProvider>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
