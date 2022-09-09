import TelegramIcon from '@mui/icons-material/Telegram'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-tl-lg rounded-tr-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
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
