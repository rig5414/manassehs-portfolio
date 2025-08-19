/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tellefolio.vercel.app',
  generateRobotsTxt: false, // since we already have a custom one
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 7000,
  autoLastmod: true,
  exclude: ['/404', '/500'],
  transform: async (config, path) => {
    // Custom transform function to set priorities for different pages
    const priorities = {
      '/': 1.0,
      '/#about': 0.8,
      '/#projects': 0.8,
      '/#experience': 0.8,
      '/#certificates': 0.8,
      '/#testimonials': 0.7,
      '/#contact': 0.9,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://tellefolio.vercel.app/sitemap.xml',
    ],
  },
}
