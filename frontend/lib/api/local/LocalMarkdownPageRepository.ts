import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { PagesRepositoryInterface } from '../PagesRepositoryInterface'
import Page, { PageContentType } from '../../../types/page'

export default class LocalMarkdownPageRepository
  implements PagesRepositoryInterface
{
  constructor(private dir: string) {}

  getPagesSlugs(): string[] {
    return fs.readdirSync(this.dir)
  }

  async getPageBySlug(slug: string): Promise<Page> {
    const fullPath = join(this.dir, `${slug}`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const page: Page = {
      slug,
      content,
      title: data.title || slug.replace(/\.md$/, ''),
      contentType: PageContentType.md,
    }
    if (data.navigation) {
      page.navigation = data.navigation
    }

    return page
  }

  async getAllPages(): Promise<Page[]> {
    const slugs = this.getPagesSlugs()
    return await Promise.all(
      slugs.map(async (slug) => await this.getPageBySlug(slug))
    )
  }
}

export const manualPageRepository = new LocalMarkdownPageRepository(
  join(process.cwd(), '../manual/md/uk')
)

export const releasesPageRepository = new LocalMarkdownPageRepository(
  join(process.cwd(), '../releases/md/uk')
)
