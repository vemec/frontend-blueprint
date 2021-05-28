// Core
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

// Layout
import Layout from '@/layout/public'

const HomePage = () => {
  const { t, lang } = useTranslation('home')
  const current = {
    canonical: '/',
    title: 'title',
    description: 'description',
    keywords: 'keywords',
  }

  const currentLang = lang === 'es' ? 'en' : 'es';

  return (
    <Layout current={current} lang={lang}>
      { t('example') }
      <br />
      <Link href={`/${currentLang}`} locale={currentLang}>
        <a href={`/${currentLang}`}>
          { t('change-locale') }
        </a>
      </Link>
    </Layout>
  )
}

export default HomePage
