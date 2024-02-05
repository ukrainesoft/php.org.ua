import LinkComponent from 'next/link'
import SearchBar from './searchbar'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import ThemeToggler from './theme-toggler'
import { findLinkBySlug, Link } from '../lib/api/external/PagesLinks'
import Dropdown from './dropdown'

// TODO Move to l10n
export const links: (Link[] | Link)[] = [
  {
    title: 'Документація',
    slug: '/manual/uk/index.md',
    url: '/manual/uk/index.md',
  },
  findLinkBySlug('/about'),
  findLinkBySlug('/php-the-right-way'),
  [3, 2, 1].map((v) => ({
    title: `PHP 8.${v}`,
    slug: `/releases/uk/8.${v}.md`,
    url: `/releases/uk/8.${v}.md`,
  })),
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
          fixed top-0 left-0 right-0 z-20"
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
                ' items-center md:space-x-8 md:justify-start md:flex bg-white dark:bg-gray-800 w-full sm:w-auto flex-column fixed sm:relative sm:p-0 z-20 sm:z-auto top-0 sm:top-auto right-0 sm:right-auto sm:bg-inherit text-right'
              }
            >
              <li className="sm:hidden items-end p-5 sm:p-0" key="close">
                <CloseIcon onClick={toggleMenu} />
              </li>
              {links.map((linkItem) =>
                Array.isArray(linkItem) ? (
                  <li
                    key={linkItem[0].title}
                    className="items-center border-t sm:border-0 justify-center p-5 sm:p-0"
                  >
                    <Dropdown
                      title={linkItem[0].title}
                      list={linkItem.map((item) => ({
                        text: item.title,
                        href: item.slug,
                      }))}
                    />
                  </li>
                ) : (
                  <li
                    className="items-center border-t sm:border-0 justify-center p-5 sm:p-0"
                    key={linkItem.slug}
                  >
                    <LinkComponent
                      className="text-gray-900 dark:text-gray-100 sm:p-4"
                      href={linkItem.slug}
                    >
                      <a>{linkItem.title}</a>
                    </LinkComponent>
                  </li>
                )
              )}
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
