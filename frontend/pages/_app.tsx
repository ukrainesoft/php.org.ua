import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />;
    </>
  )
}
