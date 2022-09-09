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
      <Header className="flex flex-col items-center justify-center mt-14 mx-auto max-w-3xl xl:max-w-5xl" />
      <div className="min-h-screen mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
