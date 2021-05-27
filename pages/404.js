// Core
import useTranslation from 'next-translate/useTranslation'

// Layout
import Layout from '@/layout/public'

const Custom404 = () => {
  const { t, lang } = useTranslation('common')
  const current = {
    canonical: null,
    title: 'title',
    description: 'description',
    keywords: null,
  }

  return (
    <Layout current={current} lang={lang}>
      { t('not-found') }
    </Layout>
  )
}

export default Custom404
