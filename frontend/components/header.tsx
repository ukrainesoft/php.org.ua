import { CMS_WESITE_NAME } from '../lib/constants'
import SearchBar from './searchbar'

type Link = {
  title: string
  href: string
}

// TODO Move to l10n
const links: Link[] = [
  {
    title: 'Документація',
    href: '/index.md',
  },
  {
    title: 'Про проєкт',
    href: 'https://github.com/ukrainesoft/php.org.ua',
  },
]

export default () => (
  <header className="flex items-center justify-between py-10 h-5 border-b border-indigo-600">
    <a
      aria-label="php.org.ua"
      className="text-2xl font-semibold block"
      href="/"
    >
      {CMS_WESITE_NAME}
    </a>

    {links.map(({ title, href }) => (
      <a className="text-gray-900 dark:text-gray-100 sm:p-4" href={href}>
        {title}
      </a>
    ))}

    <SearchBar />
  </header>
)
