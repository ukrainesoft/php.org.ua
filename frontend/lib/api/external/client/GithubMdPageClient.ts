import matter from 'gray-matter'
import Page, { PageContentType } from '../../../../types/page'
import { Link } from '../PagesLinks'
import { fetchGithubMdFile } from '../transport/fetchGithubMdFile'
import { ClientInterface } from '../ClientInterface'

export class GithubMdPageClient implements ClientInterface {
  constructor(private fetcher: (url: string) => Promise<string>) {}

  async get(link: Link): Promise<Page> {
    const urlContent = await this.fetcher(link.url)
    let { data, content } = matter(urlContent)
    return {
      slug: link.slug,
      content,
      title: link.title || data.title || link.slug,
      navigation: data.navigation,
      contentType: PageContentType.md,
    }
  }

  supports(link: Link): boolean {
    return (
      link.url.startsWith('https://raw.githubusercontent.com') &&
      link.url.endsWith('.md')
    )
  }
}

export const githubMdPageClient = new GithubMdPageClient(fetchGithubMdFile)
