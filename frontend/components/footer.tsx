import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  const { slug } = router.query
  const getGithubUrl = (
    isEdit: boolean,
    slug: string | string[] | undefined
  ) => {
    // TODO Move to an env variable
    return `https://github.com/ukrainesoft/php.org.ua/${
      isEdit ? 'edit' : 'blob'
    }/master/manual/md/uk/${slug || ''}`
  }

  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()}{' '}
        <a href="https://php.org.ua/" className="hover:underline">
          php.org.ua
        </a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href={getGithubUrl(false, slug)}
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            target="_blank"
          >
            Дивитись статтю на GitHub
          </a>
        </li>
        <li>
          <a
            href={getGithubUrl(true, slug)}
            className="mx-3 font-bold hover:underline"
            target="_blank"
          >
            Виправити на GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
