import { useRouter } from 'next/router'
import { CMS_WESITE_NAME } from '../lib/constants'

const FOOTER_ARTICLE_LINK_TO_VIEW = 'Дивитись статтю на GitHub'
const FOOTER_ARTICLE_LINK_TO_EDIT = 'Виправити на GitHub'

const Footer = () => {
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
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <a href="https://php.org.ua/" className="hover:underline">
          {CMS_WESITE_NAME}
        </a>{' '}
        © {new Date().getFullYear()}{' '}
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
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
    </footer>
  )
}

export default Footer
