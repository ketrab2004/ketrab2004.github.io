/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    exportPathMap: async function(defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
        let projects = {};
        [
            "cardboard-mod",
            "grass-mod",
            "cannibalism-mod",
            "html5-hangman",
            "roblox-infinite-terrain"
        ].forEach(project => {
            projects[`projects/${project}`] = { page: "/projects/[project]", query: { project: project } };
        });

        return {
            "/": { page: "/" },
            "contact": { page: "/contact" },
            "projects": { page: "/projects" },

            ...projects
        }
    }
}

module.exports = nextConfig;
