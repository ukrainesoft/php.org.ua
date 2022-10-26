import Page, { PageContentType } from '../../../../types/page'
import { Link } from '../PagesLinks'
import { fetchJson } from '../transport/fetchJson'
import {
  TelegraphApiNodeElement,
  TelegraphApiPageResponse,
} from '../types/telegraph'
import { ClientInterface } from '../ClientInterface'

export class TelegraphPageClient implements ClientInterface {
  constructor(
    private fetcher: (url: string) => Promise<TelegraphApiPageResponse>
  ) {}

  async get(link: Link): Promise<Page> {
    const response = await (await this.fetcher(link.url)).result

    return {
      slug: link.slug,
      content: this.pageContentToHtml({
        tag: 'div',
        children: response.content,
      }),
      title: link.title || response.title || link.slug,
      contentType: PageContentType.html,
    }
  }

  supports(link: Link): boolean {
    return (
      link.url.startsWith('https://api.telegra.ph/getPage') &&
      link.url.endsWith('return_content=true')
    )
  }

  private pageContentToHtml(pageContent: TelegraphApiNodeElement): string {
    const doc = document.createElement(pageContent.tag, pageContent.attrs)

    if (pageContent.children && pageContent.children.length > 0) {
      let contentParst: string[] = []
      for (let child of pageContent.children) {
        contentParst.push(
          typeof child === 'string' ? child : this.pageContentToHtml(child)
        )
      }
      doc.innerHTML = contentParst.join('\n')
    }

    return doc.outerHTML
  }
}

export const telegraphPageClient = new TelegraphPageClient(fetchJson)
