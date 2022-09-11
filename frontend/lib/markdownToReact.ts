import { createElement } from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHightlight from 'rehype-highlight'
import rehypeReact from 'rehype-react'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import { ReactElement } from 'rehype-react/lib'
import CodeRunner from '../editor/CodeRunner'

export default function markdownToReact(markdown: string): ReactElement {
  const result = unified()
    .use(rehypeReact, {
      createElement,
      components: {
        code: (props: any, children: any) => {
          const lang = getLanugageFromClassName(props.className)
          if (lang === 'php') {
            return createElement(CodeRunner, { code: props.children[0] || '' })
          }

          return createElement('code', props, props.children)
        },
      },
    })
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(remarkGfm)
    .use(rehypeRaw)
    .use(rehypeHightlight, { ignoreMissing: true, plainText: ['php'] })
    .processSync(markdown)

  return result.result
}

function getLanugageFromClassName(className: string): string {
  const matches = className?.match(/(lang|language)-(.+)/) || []
  return matches[2] || ''
}
