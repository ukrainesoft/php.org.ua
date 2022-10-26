import TelegramIcon from '@mui/icons-material/Telegram'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from 'next/link'
import { pagesLinks } from '../lib/api/external/PagesLinks'

const footerLinks = pagesLinks.filter((page) =>
  ['/terms', '/privacy'].includes(page.slug)
)

const Footer = () => {
  return (
    <footer className="bg-white rounded-tl-lg rounded-tr-lg shadow flex items-center justify-between p-6 dark:bg-gray-800">
      <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <a
          href={process.env.NEXT_PUBLIC_WEBSITE_HOST}
          className="hover:underline font-logo italic"
        >
          {process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}
        </a>{' '}
        © {new Date().getFullYear()}{' '}
      </div>

      <div className="items-center space-x-4">
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          {footerLinks.map((page) => (
            <li key={page.slug}>
              <Link href={page.slug}>
                <a className="mr-4 hover:underline md:mr-6">{page.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="items-center space-x-4">
        <Link href={'https://github.com/ukrainesoft/php.org.ua-docs'}>
          <a target="_blank">
            <GitHubIcon className="text-sky-500 cursor-pointer" />
          </a>
        </Link>
        <Link href={'https://t.me/php_org_ua'}>
          <a target="_blank">
            <TelegramIcon className="text-sky-500 cursor-pointer" />
          </a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
