/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
    }

    output: "export",
    basePath: "/nextjs-github-pages",

    images: {
        unoptimized: true,
      },
};

module.exports = nextConfig
