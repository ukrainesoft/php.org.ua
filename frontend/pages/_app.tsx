import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NextNProgress from 'nextjs-progressbar'
import '../styles/index.css'
import 'highlight.js/styles/a11y-dark.css'

import * as gtag from '../lib/gtag'
import Script from 'next/script'

// TODO Use Tailwind config, sky-600
const PROGRESS_BAR_COLOR = '#0284c7'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <NextNProgress color={PROGRESS_BAR_COLOR} />
      <Component {...pageProps} />
    </>
  )
}
