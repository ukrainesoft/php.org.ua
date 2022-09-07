import { webPageRepository } from '../lib/api/external/WebPageRepository'
import PageComponent from '../components/page'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Page from '../types/page'

export default (props: any) => {
  const router = useRouter()
  const [page, setPage] = useState<Page | undefined>()
  useEffect(() => {
    ;(async () => {
      // TODO Security & page type check for formatter
      try {
        const page = await webPageRepository.getPageBySlug(router.asPath)
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
