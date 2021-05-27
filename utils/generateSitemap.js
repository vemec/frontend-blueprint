/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs')
const format = require('xml-formatter')
const urls = require('../urls')
const { locales } = require('../i18n')

const generateSitemap = () => {
  const siteUrl = 'https://talk2u.co'
  const changefreq = 'daily'
  const priority = 0.8
  const date = new Date()
  const xmlHead = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
  const xmlfooter = '</urlset>'

  // set header
  let content = xmlHead;

  // generate urls
  urls.forEach((url) => {
    content += `
    <url>
      <loc>${siteUrl}${url}</loc>
      <lastmod>${date.toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    `
    locales.forEach((locale) => {
      if (locale !== 'en') {
        content += `<xhtml:link rel="alternate" hreflang="${locale}" href="${siteUrl}/${locale}${url}"/>`
      }
    })
    content += '</url>'
  })

  // set footer.
  content += xmlfooter

  const data = format(content, {
    indentation: '  ',
    collapseContent: true,
  })

  // generate file
  try {
    fs.writeFileSync('../public/sitemap.xml', data)
  } catch (err) {
    console.error(err)
  }
}

module.exports = generateSitemap();
