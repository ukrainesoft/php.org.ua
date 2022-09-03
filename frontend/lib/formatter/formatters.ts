import Page from '../../types/page'
import markdownToHtml from '../markdownToHtml'
import { PageFormat } from './PageFormat'

export interface FormatterInterface {
  format(page: Page): Promise<Page>
  supports(page: Page, format: PageFormat): boolean
}

export class MarkdownFormatter implements FormatterInterface {
  constructor(private toHtmlFormatter: (s: string) => Promise<string>) {}
  async format(page: Page): Promise<Page> {
    page.content = await this.toHtmlFormatter(page.content)
    return page
  }

  supports(page: Page, format: PageFormat): boolean {
    return PageFormat.md === format
  }
}

export const markdownFormatter = new MarkdownFormatter(markdownToHtml)
