/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_HOST,
  generateRobotsTxt: true,
  sitemapSize: 1000,
  outDir: 'out',
}
