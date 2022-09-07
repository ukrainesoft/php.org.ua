import matter from 'gray-matter'
import Page, { PageContentType } from '../../../types/page'
import { PagesRepositoryInterface } from '../PagesRepositoryInterface'
import { fetchTextData } from './fetchTextData'
import { pagesUrls, Url } from './PagesUrls'

export class WebPageRepository implements PagesRepositoryInterface {
  constructor(
    private pagesUris: Url[],
    private fetcher: (url: string) => Promise<string>
  ) {}

  getPagesSlugs(): string[] {
    return this.pagesUris.map(({ slug }) => slug)
  }

  async getPageBySlug(slug: string): Promise<Page> {
    const pageUri = this.pagesUris.find(
      (url: Url) => url.slug === slug.split('#')[0]
    )
    if (!pageUri) {
      throw new PageNotFoundError(`Slug: ${slug}`)
    }
    const urlContent = await this.fetcher(pageUri.url)
    let { data, content } = matter(urlContent)
    return {
      slug,
      content,
      title: pageUri.title || data.title || slug.replace(/\.md$/, ''),
      navigation: data.navigation,
      contentType: PageContentType.md,
    }
  }

  async getAllPages(): Promise<Page[]> {
    const slugs = this.getPagesSlugs()
    return await Promise.all(
      slugs.map(async (slug) => await this.getPageBySlug(slug))
    )
  }
}

export const webPageRepository = new WebPageRepository(pagesUrls, fetchTextData)

export class PageNotFoundError extends Error {}
