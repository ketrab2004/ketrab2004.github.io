/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL ?? '.',
    generateRobotsTxt: true,
    sitemapSize: 10,

    // default options
    changefreq: "monthly",
    priority: .9,
    autoLastmod: false,

    // https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
    // 0.0 - 0.3: Old news posts, outdated guides, irrelevant pages you nevertheless don't want to delete, merge, or update.
    // 0.4 - 0.7: Articles, blog posts, category pages, FAQs, system pages. The bulk of your site's content falls into this range.
    // 0.8 - 1.0: Extremely important content, such as your homepage, major category pages, product pages, and subdomain indexes.

    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/'
            }
        ]
    },

    transform: async (config, path) => {
        switch (path) {
            case '/':
                config.priority = 1;
                config.changefreq = "yearly";
                break;

            case "/contact":
                config.priority = .8;
                config.changefreq = "monthly";
                break;

            case "/projects":
                config.priority = .9;
                config.changefreq = "monthly";
                break;

            default:
                if ( path.match(/^\/projects\/[^\\ /]+$/) ) { // if the path is for a project
                    config.priority = .6;
                    config.changefreq = "yearly";
                    //config.lastmod = new Date().toISOString(); // idk how to load the data from here
                }
                break;
        }

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.lastmod ?? config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
}