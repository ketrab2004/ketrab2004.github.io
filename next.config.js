/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    exportPathMap: async function(defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
        return {
            "/": { page: "/" },
            "contact": { page: "/contact" },
            "projects": { page: "/projects" },

            "projects/cardboard-mod": { page: "/projects/[project]", query: { project: "cardboard-mod" } },
            "projects/grass-mod": { page: "/projects/[project]", query: { project: "grass-mod" } },
            "projects/cannibalism": { page: "/projects/[project]", query: { project: "cannibalism" } },
            "projects/html5-hangman": { page: "/projects/[project]", query: { project: "html5-hangman" } },
            "projects/roblox-infinite-terrain": { page: "/projects/[project]", query: { project: "roblox-infinite-terrain" } },
        }
    }
}

module.exports = nextConfig;
