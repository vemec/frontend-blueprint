// Core
import useTranslation from 'next-translate/useTranslation'

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

  return (
    <Layout current={current} lang={lang}>
      { t('translate') }
    </Layout>
  )
}

export default HomePage
