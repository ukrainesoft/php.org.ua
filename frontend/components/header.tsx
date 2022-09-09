import Link from 'next/link'
import SearchBar from './searchbar'

type Link = {
  title: string
  href: string
}

// TODO Move to l10n
export const links: Link[] = [
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

type Props = {
  className: string
}
export default ({ className }: Props) => (
  <div className={'flex flex-col mx-auto ' + className}>
    <nav
      className="py-4 bg-white/80
          backdrop-blur-md shadow-md w-full
          fixed top-0 left-0 right-0 z-10"
    >
      <div className="flex justify-between mx-auto max-w-3xl xl:max-w-5xl">
        <div className="flex space-x-10">
          <div className="flex items-center">
            <a className="cursor-pointer" href="/">
              <h3 className="text-2xl font-bold text-sky-600 font-logo italic">
                {process.env.NEXT_PUBLIC_WEBSITE_NAME}
              </h3>
            </a>
          </div>
          <div className="items-center hidden space-x-8 lg:flex justify-start">
            {links.map(({ title, href }) => (
              <Link
                className="text-gray-900 dark:text-gray-100 sm:p-4"
                href={href}
                key={href}
              >
                <a>{title}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <SearchBar />
        </div>
      </div>
    </nav>
  </div>
)
