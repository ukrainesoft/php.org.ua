import React from 'react'
import { ReactElement } from 'rehype-react/lib'
import markdownToReact from '../lib/markdownToReact'
import Page, { PageContentType } from '../types/page'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  page: Page
}

export default ({ page }: Props) => {
  const content: ReactElement =
    page.contentType === PageContentType.md ? (
      markdownToReact(page.content)
    ) : (
      <>{page.content}</>
    )
  return <article className={markdownStyles['markdown']}>{content}</article>
}
