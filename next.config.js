const withPlugins = require("next-compose-plugins");
// const optimizedImages = require('next-optimized-images');

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true
}

module.exports = withPlugins([

    // [optimizedImages, {
    //     images: {
    //         disableStaticImages: true,

    //         handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif", "ico"],

    //         name: "[path][name]_w[width]-h[height]__[md4:hash:base62:16]__.[ext]",

    //         publicPath: "'/_next/static/chunks/'" // '/_next/static/chunks/images/' remove the /images
    //         // because the [path] is included in the name, and the path always starts with /images
    //         // so to avoid /images/images/other/image.jpg
    //     }
    // }]

], nextConfig);
