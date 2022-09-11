import { manualPageRepository } from '../../../lib/api/local/LocalMarkdownPageRepository'
import { PageProps } from '../../../types/pageProps'
import Page from '../../../components/page'
import GithubButtons from '../../../components/github-buttons'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export default ({ page }: PageProps) => {
  return (
    <>
      <Page page={page}>
        <GithubButtons />
      </Page>
    </>
  )
}

export async function getStaticProps({ params: { slug } }: Params) {
  const page = await manualPageRepository.getPageBySlug(slug)

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const posts = await manualPageRepository.getAllPages()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
