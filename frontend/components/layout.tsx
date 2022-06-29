import Footer from './footer'
import Header from './header'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
