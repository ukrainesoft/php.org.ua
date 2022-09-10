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
    <ul className="flex flex-col sm:flex-row justify-center sm:justify-end items-center sm:m-5 sm:text-sm text-gray-500 dark:text-gray-400">
      <li className="w-max-full space-y-5 m-5">
        <a
          href={getGithubUrl('blob', slug)}
          className="sm:mx-3 bg-sky-800 hover:bg-white hover:text-sky-800 border border-sky text-white font-bold p-3 sm:px-12 lg:px-8 mb-6 lg:mb-0"
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
