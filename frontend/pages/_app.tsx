import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import '../styles/index.css'

// TODO Use Tailwind config, indigo-600
const PROGRESS_BAR_COLOR = '#4f46e5'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color={PROGRESS_BAR_COLOR} />
      <Component {...pageProps} />;
    </>
  )
}
