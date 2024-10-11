/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITEURL || 'http://localhost:3000',
    generateRobotsTxt: true,
    generateIndexSitemap:false,
}