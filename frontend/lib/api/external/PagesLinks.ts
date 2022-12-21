import { PageLinkNotFoundError } from './errors/PageLinkNotFoundError'

export type Link = {
  slug: string
  title: string
  url: string
}
export const pagesLinks: Link[] = [
  {
    slug: '/php-the-right-way',
    title: 'PHP: Правильний шлях',
    url: 'https://raw.githubusercontent.com/ukrainesoft/php-the-right-way/master/README.md',
  },
  {
    slug: '/about',
    title: 'Про проєкт',
    url: 'https://raw.githubusercontent.com/ukrainesoft/php.org.ua/master/README.md',
  },
  {
    slug: '/terms',
    title: 'Правила та умови',
    url: 'https://api.telegra.ph/getPage/Pravila-ta-umovi-10-26?return_content=true',
  },
  {
    slug: '/privacy',
    title: 'Політика конфіденційності',
    url: 'https://api.telegra.ph/getPage/Polіtika-konfіdencіjnostі-10-26?return_content=true',
  },
]

export const findLinkBySlug = (slug: string) => {
  const page = pagesLinks.find((link: Link) => link.slug === slug)
  if (page) {
    return page
  }
  throw new PageLinkNotFoundError(`Page with slug ${slug} not found`)
}
