// const isLocal = process.env.IS_LOCAL ?? false;

/** @type {import("next").NextConfig} */
const nextConfig = {
    // assetPrefix: (isLocal ? "./" : ''), // on localhost, we need to use relative paths (only works for paths in the root)
    
    reactStrictMode: true
}

module.exports = nextConfig;
