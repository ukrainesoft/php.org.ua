import { PageFormat } from '../../formatter/PageFormat'

export type Url = {
  slug: string
  title: string
  url: string
  format: PageFormat
}
export const pagesUrls: Url[] = [
  {
    slug: '/php-the-right-way',
    title: 'PHP: Правильний шлях',
    url: 'https://raw.githubusercontent.com/ukrainesoft/php-the-right-way/master/README.md',
    format: PageFormat.md,
  },
  {
    slug: '/about',
    title: 'PHP: Правильний шлях',
    url: 'https://raw.githubusercontent.com/ukrainesoft/php.org.ua/master/README.md',
    format: PageFormat.md,
  },
]
