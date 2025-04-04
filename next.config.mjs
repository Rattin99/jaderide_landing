/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/jadeorder",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
