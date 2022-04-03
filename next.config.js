const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        disableStaticImages: true
    }
}

module.exports = withPlugins([
    [optimizedImages, { // config for next-optimized-images
        handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif", "ico"],

        imagesName: "[name].[ext].__[hash]__.[ext]",

        optimizeImagesInDev: true,

        optipng: {
            interlaced: true
        },
        gifsicle: {
            interlaced: true,
            optimizationLevel: 2
        },
        webp: {
            metadata: "all"
        }
    }],

], nextConfig);
