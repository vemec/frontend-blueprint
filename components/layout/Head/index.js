// Core
import { useEffect, useState } from 'react'
import Head from 'next/head'

const Header = ({ canonical, title, description, keywords, alternates }) => {
  const [typeMedia, setMedia] = useState('print')
  const fonts = 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap'

  useEffect(() => {
    setMedia('all')
  }, [])

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preload" href={fonts} as="style" />
      <link rel="stylesheet" href={fonts} media={typeMedia} />
      <noscript>
        <link rel="stylesheet" href={fonts} />
      </noscript>
      <link rel="canonical" href={`https://xxxxx.xxx${canonical}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://xxxxx.xxx${canonical}`} />
      {
        alternates && alternates.map((alternate) => (
          <link key={alternate.hreflang} rel="alternate" hrefLang={alternate.hreflang} href={`https://xxxxx.xxx${alternate.href}`} />
        ))
      }
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <meta name="application-name" content="xxxxx" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover" />

      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#de49ba" />
      <meta name="msapplication-TileColor" content="#de49ba" />
      <meta name="theme-color" content="#de49ba" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="http://xxxxx.xxx" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/icons/android-chrome-192x192.png" />
      <meta name="twitter:site" content="@WeArexxxxx" />
      <meta name="twitter:creator" content="@WeArexxxxx" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="xxxxx" />
      <meta property="og:url" content="http://xxxxx.xxx" />
      <meta property="og:image" content="/icons/apple-touch-icon.png" />
    </Head>
  )
}

export default Header
