import { useRouter } from 'next/router'

const FOOTER_ARTICLE_LINK_TO_VIEW = 'Дивитись статтю на GitHub'
const FOOTER_ARTICLE_LINK_TO_EDIT = 'Виправити на GitHub'

export default () => {
  const router = useRouter()
  const { slug } = router.query
  const getGithubUrl = (
    action: 'edit' | 'blob',
    slug: string | string[] | undefined
  ) => {
    return `${process.env.NEXT_PUBLIC_GITHUB_FILE_LINK}`
      .replace('%action%', action)
      .replace('%slug%', slug?.toString() || '')
  }

  return (
    <ul className="flex flex-wrap justify-end m-5 text-sm text-gray-500 dark:text-gray-400">
      <li>
        <a
          href={getGithubUrl('blob', slug)}
          className="mx-3 bg-indigo-800 hover:bg-white hover:text-indigo-800 border border-indigo text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          target="_blank"
        >
          {FOOTER_ARTICLE_LINK_TO_VIEW}
        </a>
      </li>
      <li>
        <a
          href={getGithubUrl('edit', slug)}
          className="mx-3 font-bold hover:underline"
          target="_blank"
        >
          {FOOTER_ARTICLE_LINK_TO_EDIT}
        </a>
      </li>
    </ul>
  )
}
