import React from 'react'
import { ReactElement } from 'rehype-react/lib'
import markdownToReact from '../lib/markdownToReact'
import Page, { PageContentType } from '../types/page'
import markdownStyles from '../styles/markdown.module.css'
import htmlToReact from '../lib/htmlToReact'

type Props = {
  page: Page
}

export default ({ page }: Props) => (
  <article className={markdownStyles['markdown']}>
    {getProcessedContent(page)}
  </article>
)

const getProcessedContent = (page: Page): ReactElement => {
  if (page.contentType === PageContentType.md) {
    return markdownToReact(page.content)
  }
  if (page.contentType === PageContentType.html) {
    return htmlToReact(page.content)
  }

  return <>{page.content}</>
}
