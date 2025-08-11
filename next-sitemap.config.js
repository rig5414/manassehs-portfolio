/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tellefolio.vercel.app',
  generateRobotsTxt: false, // since we already have a custom one
  generateIndexSitemap: false,
  priority: 1.0,
  sitemapSize: 7000,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://tellefolio.vercel.app/sitemap.xml',
    ],
  },
}
