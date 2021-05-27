const urls = require('../urls')
const { locales } = require('../i18n')

const getAlternates = (canonical, currentLang) => {
  const alternates = []
  urls.forEach((url) => {
    locales.forEach((locale) => {
      if (url === canonical && locale !== currentLang) {
        const finalLocale = locale === 'en' ? '' : locale;
        const href = url !== '/' ? `/${finalLocale}${url}` : `/${finalLocale}`
        alternates.push({
          hreflang: locale,
          href,
        })
      }
    })
  })

  return alternates
}

export default getAlternates;
