import PageComponent from '../components/page'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Page from '../types/page'
import { githubMdPageClient } from '../lib/api/external/client/GithubMdPageClient'
import { telegraphPageClient } from '../lib/api/external/client/TelegraphPageClient'
import { pagesLinks } from '../lib/api/external/PagesLinks'
import { PageLinkNotFoundError } from '../lib/api/external/errors/PageLinkNotFoundError'
import { PageNotFoundError } from '../lib/api/external/errors/PageNotFoundError'

export default (props: any) => {
  const router = useRouter()
  const [page, setPage] = useState<Page | undefined>()
  useEffect(() => {
    ;(async () => {
      try {
        if (!router.isReady) {
          return
        }
        const link = pagesLinks.find((page) => page.slug === router.asPath)
        if (!link) {
          throw new PageLinkNotFoundError(`Page link not found: ${link}`)
        }
        for (let client of [githubMdPageClient, telegraphPageClient]) {
          if (client.supports(link)) {
            const page = await client.get(link)
            setPage(page)
            return
          }
        }
        throw new PageNotFoundError('Page not found')
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
