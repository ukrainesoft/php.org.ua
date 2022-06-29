import SearchBar from './searchbar'

export default () => (
  <header className="flex items-center justify-between py-10 h-5 border-b border-indigo-600">
    <a
      aria-label="php.org.ua"
      className="text-2xl font-semibold block"
      href="/"
    >
      Php.org.ua
    </a>
    <a className="text-gray-900 dark:text-gray-100 sm:p-4" href="/">
      Документація
    </a>
    <a
      className="text-gray-900 dark:text-gray-100 sm:p-4"
      href="https://github.com/ukrainesoft/php.org.ua"
    >
      Про проєкт
    </a>
    <SearchBar />
  </header>
)
