import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PageTitle from './page-title'
import { PageProps } from '../types/pageProps'
import Base from './base'
import PageBody from './page-body'
import PageBreadcrumbs from './page-breadcrumbs'

export default ({ page, children }: PageProps) => {
  const router = useRouter()
  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const title =
    page.title ||
    `${process.env.WEBSITE_NAME} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`
  return router.isFallback ? (
    <PageTitle>Loading…</PageTitle>
  ) : (
    <Base title={title}>
      <PageBreadcrumbs page={page} />
      <PageBody page={page} />
      {children}
    </Base>
  )
}
