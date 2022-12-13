import PageComponent from '../components/page'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Page, { PageContentType } from '../types/page'
import { githubMdPageClient } from '../lib/api/external/client/GithubMdPageClient'
import { telegraphPageClient } from '../lib/api/external/client/TelegraphPageClient'
import { Link, pagesLinks } from '../lib/api/external/PagesLinks'
import { PageLinkNotFoundError } from '../lib/api/external/errors/PageLinkNotFoundError'
import { PageNotFoundError } from '../lib/api/external/errors/PageNotFoundError'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export default (props: { page: Page }) => {
  const router = useRouter()
  const [page, setPage] = useState<Page | undefined>(props.page)

  useEffect(() => {
    ;(async () => {
      try {
        if (!router.isReady) {
          return
        }
        const link = pagesLinks.find((page) => page.slug === router.asPath)
        if (!link) {
          throw new PageLinkNotFoundError(
            `Page link not found: ${router.asPath}`
          )
        }
        const page = await getPageByLink(link)
        setPage(page)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [router.asPath])

  if (!page) {
    return null
  }

  return <PageComponent page={page} />
}

export async function getStaticProps({
  params: { slug },
}: Params): Promise<{ props: { page: Page } }> {
  const link = pagesLinks.find(
    (pageLink) => removeLeadingSlash(pageLink.slug) === removeLeadingSlash(slug)
  )
  if (!link) {
    throw new PageLinkNotFoundError(`Page link not found: ${slug}`)
  }
  return {
    props: {
      page: {
        slug: link.slug,
        title: link.title,
        content: 'Loading...',
        contentType: PageContentType.html,
      },
    },
  }
}

export const getStaticPaths = async () => ({
  paths: pagesLinks.map((page) => {
    return {
      params: {
        slug: removeLeadingSlash(page.slug),
      },
    }
  }),
  fallback: false,
})

const getPageByLink = async (link: Link): Promise<Page> => {
  for (let client of [githubMdPageClient, telegraphPageClient]) {
    if (client.supports(link)) {
      return await client.get(link)
    }
  }
  throw new PageNotFoundError('Page not found')
}

const removeLeadingSlash = (str: string) => str.replace(/^\/+/g, '')
