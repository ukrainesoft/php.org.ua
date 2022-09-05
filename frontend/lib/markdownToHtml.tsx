import { createElement, Fragment, useEffect, useState } from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import rehypeParse from 'rehype-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHightlight from 'rehype-highlight'
import rehypeReact from 'rehype-react'

import type Mdast from 'mdast'
import pageTitle from '../components/page-title'

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

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await await unified()
    // .use(phpband)

    .use(rehypeReact, {
      createElement,
      components: {
        code: pageTitle,
        a: pageTitle,
        p: pageTitle,
      },
    })
    .use(rehypeParse)
    .use(remarkParse)

    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeHightlight, { ignoreMissing: true })
    .process(markdown)

  return result.toString()
}
