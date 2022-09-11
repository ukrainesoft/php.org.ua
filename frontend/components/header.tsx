import Link from 'next/link'
import SearchBar from './searchbar'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { ThemeToggler } from './theme-changer'

type Link = {
  title: string
  href: string
}

// TODO Move to l10n
export const links: Link[] = [
  {
    title: 'Документація',
    href: '/manual/uk/index.md',
  },
  {
    title: 'Про проєкт',
    href: '/about',
  },
  {
    title: 'PHP Правильний Шлях',
    href: '/php-the-right-way',
  },
]

type Props = {
  className: string
}
export default ({ className }: Props) => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)
  return (
    <div className={'flex flex-col mx-auto ' + className}>
      <nav
        className="py-3 bg-white/80
          backdrop-blur-md shadow-md w-full
          dark:bg-gray-800
          fixed top-0 left-0 right-0 z-10"
      >
        <div className="flex justify-around md:justify-between mx-auto max-w-3xl xl:max-w-5xl">
          <div className="flex space-x-10 flex-row">
            <div className="flex items-center">
              <a className="cursor-pointer" href="/">
                <h3 className="text-2xl font-bold font-logo italic">
                  {process.env.NEXT_PUBLIC_WEBSITE_NAME}
                </h3>
              </a>
            </div>
            <ul
              className={
                (showMenu ? '' : 'hidden') +
                ' items-center md:space-x-8 md:justify-start md:flex bg-white dark:bg-gray-800 w-full sm:w-auto flex-column fixed sm:relative p-5 sm:p-0 z-20 sm:z-auto top-0 sm:top-auto right-0 sm:right-auto sm:bg-inherit text-right'
              }
            >
              <li className="sm:hidden items-end p-5 sm:p-0">
                <CloseIcon onClick={toggleMenu} />
              </li>
              {links.map(({ title, href }) => (
                <li
                  className="items-center border-t sm:border-0 justify-center p-5 sm:p-0"
                  key={href}
                >
                  <Link
                    className="text-gray-900 dark:text-gray-100 sm:p-4"
                    href={href}
                    key={href}
                  >
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end space-x-2 items-center">
            <SearchBar />
            <ThemeToggler />
          </div>
          <div className="flex items-center sm:hidden">
            <MenuIcon onClick={toggleMenu} />
          </div>
        </div>
      </nav>
    </div>
  )
}
