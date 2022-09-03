import Page from '../../types/page'

export interface PagesRepositoryInterface {
  getPagesSlugs(): string[]
  getPageBySlug(slug: string): Promise<Page>
  getAllPages(): Promise<Page[]>
}
