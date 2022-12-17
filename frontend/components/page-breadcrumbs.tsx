import { PageProps } from '../types/pageProps'

export default ({ page }: PageProps): JSX.Element => {
  if (!page.navigation) {
    return <></>
  }
  return (
    <div className="text-right">
      {page.navigation.map((breadcrumbObj, i) => {
        const [url, title] = Object.entries(breadcrumbObj)[0]
        return (
          <a href={url} key={url} className="mx-4">
            {title}
          </a>
        )
      })}
    </div>
  )
}
