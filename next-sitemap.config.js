/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tellefolio.vercel.app',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 1.0,
  sitemapSize: 7000,
  autoLastmod: true,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://tellefolio.vercel.app/sitemap.xml',
    ],
  },
}
