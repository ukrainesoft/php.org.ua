import { createElement, Fragment, useEffect, useState } from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import rehypeParse from 'rehype-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHightlight from 'rehype-highlight'
import rehypeReact from 'rehype-react'
import hljs from 'highlight.js'

import type Mdast from 'mdast'
import pageTitle from '../components/page-title'
import { ReactElement } from 'rehype-react/lib'
import { language } from 'gray-matter'

/** @type {import('unified').Plugin<[], MdastRoot>} */
const phpband = () => {
  return (tree: Mdast.Root, file: any) => {
    for (const node of tree.children) {
      if (node.type === 'code' && node.lang === 'php') {
        node.value = `<>asdfa</>`
      }
    }
  }
}

export default function markdownToReact(markdown: string): ReactElement {
  // markdown = `### Hello
  // [is\_null()](function.is-null.md)
  // `
  const result = unified()
    // .use(phpband)

    .use(rehypeReact, {
      createElement,
      components: {
        // code: pageTitle,
        code: (props: any, children: any) => {
          console.log(props)

          // const hightlighted = hljs.highlightAuto(props.children[0])
          // console.log(hightlighted)

          // console.log(hightlighted.language)
          // if (Array.isArray(props.children) && props.children.length === 1) {
          //   return createElement('code', null, props.children)
          // }
          // Here should be editor for the php code
          const lang = getLanugageFromClassName(props.className)
          if (lang === 'php') {
            return <></>
          }

          return createElement('code', props, props.children)
        },
        // h3: pageTitle,
      },
    })
    .use(rehypeParse)
    .use(remarkParse)

    .use(remarkRehype, { allowDangerousHtml: true })
    // .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeHightlight, { ignoreMissing: true, plainText: ['php'] })
    .processSync(markdown)

  return result.result
}

function getLanugageFromClassName(className: string): string {
  const matches = className?.match(/(lang|language)-(.+)/) || []
  return matches[2] || ''
}
