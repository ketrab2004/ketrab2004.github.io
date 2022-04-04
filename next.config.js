const isLocal = process.env.IS_LOCAL ?? false;

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    assetPrefix: (isLocal ? "./" : '') // on localhost, we need to use relative paths (only works for paths in the root)
}

module.exports = nextConfig;
