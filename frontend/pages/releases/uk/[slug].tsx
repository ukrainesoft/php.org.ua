import { releasesPageRepository } from '../../../lib/api/local/LocalMarkdownPageRepository'
import { PageProps } from '../../../types/pageProps'
import Page from '../../../components/page'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export default ({ page }: PageProps) => {
  return <Page page={page} />
}

export async function getStaticProps({ params: { slug } }: Params) {
  const page = await releasesPageRepository.getPageBySlug(slug)

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const pages = await releasesPageRepository.getAllPages()

  return {
    paths: pages.map((page) => {
      return {
        params: {
          slug: page.slug,
        },
      }
    }),
    fallback: false,
  }
}
