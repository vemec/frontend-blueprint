// utils
import getAlternates from '@/utils/getAlternates'

import Head from './Head'
import LGPD from './LGPD'

const PublicLayout = ({ children, current, lang }) => (
  <>
    <Head
      canonical={current.canonical}
      alternates={getAlternates(current.canonical, lang)}
      title={current.title}
      description={current.description}
      keywords={current.keywords}
    />
    <main className="main">
      { children }
      <LGPD />
    </main>
  </>
)

export default PublicLayout
