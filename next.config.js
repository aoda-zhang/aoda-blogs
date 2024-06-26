import withMDX from "@next/mdx";
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  images: {
    domains: [],
  },
};
export default withMDX(nextConfig);
