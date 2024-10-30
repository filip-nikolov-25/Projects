
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  i18n: {
    locales: ["en", "mk"],
    defaultLocale: "mk",
    localeDetection: true,
  },
};

module.exports = nextConfig;

