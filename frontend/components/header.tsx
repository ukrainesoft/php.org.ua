import Link from 'next/link'
import SearchBar from './searchbar'

type Link = {
  title: string
  href: string
}

// TODO Move to l10n
const links: Link[] = [
  {
    title: 'PHP Правильний Шлях',
    href: '/php-the-right-way',
  },
  {
    title: 'Документація',
    href: '/manual/uk/index.md',
  },
  {
    title: 'Про проєкт',
    href: '/about',
  },
]

export default () => (
  <header className="flex items-center justify-between py-10 h-5 border-b border-indigo-800">
    <a
      aria-label="php.org.ua"
      className="text-2xl font-semibold block text-indigo-800"
      href="/"
    >
      {process.env.NEXT_PUBLIC_WEBSITE_NAME}
    </a>

    {links.map(({ title, href }) => (
      <Link
        className="text-gray-900 dark:text-gray-100 sm:p-4"
        href={href}
        key={href}
      >
        <a>{title}</a>
      </Link>
    ))}

    <SearchBar />
  </header>
)
