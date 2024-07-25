/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yjhjerbeqfovjjmdnbwh.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/images/bus-images/**",
      },
    ],
  },
};

export default nextConfig;
