/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // generates a static site (SSG) -> /out folder
  trailingSlash: true,       // routes like /servicios/ for static hosting
  images: { unoptimized: true }, // required for 'export' (no image server)
};
export default nextConfig;
