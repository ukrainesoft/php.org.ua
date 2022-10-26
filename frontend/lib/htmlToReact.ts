import { createElement } from 'react'
import { unified } from 'unified'
import rehypeReact from 'rehype-react'
import rehypeParse from 'rehype-parse'
import { ReactElement } from 'rehype-react/lib'

export default function htmlToReact(html: string): ReactElement {
  const result = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, { createElement })
    .processSync(html)

  return result.result
}
