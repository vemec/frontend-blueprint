/* eslint-disable react/jsx-props-no-spreading */
// Root
import Router from 'next/router'
import NProgress from 'nprogress';
import { aload } from '../utils/aload'

// Styles
import '../styles/critical.scss'
import 'nprogress/nprogress.css';
import '../styles/main.scss'

const onDone = () => {
  NProgress.done()
  aload()
}

// Notice how we track pageview when route is changed
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => onDone())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
