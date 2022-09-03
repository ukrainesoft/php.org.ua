const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-tl-lg rounded-tr-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <a href="https://php.org.ua/" className="hover:underline">
          {process.env.NEXT_PUBLIC_WEBSITE_NAME}
        </a>{' '}
        © {new Date().getFullYear()}{' '}
      </span>
    </footer>
  )
}

export default Footer
