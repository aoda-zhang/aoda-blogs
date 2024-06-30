import Layout from "@/shared/components/Layout";
import { memo, ElementType } from "react";
const MyApp: React.FC<{ Component: ElementType; pageProps: object }> = ({
  Component,
  pageProps,
}) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default memo(MyApp);
