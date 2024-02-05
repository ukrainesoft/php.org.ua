import PageType from '../types/page'
import { writeFileSync } from 'fs'

// TODO Divide files by first letter
export function createSearchIndex(page: PageType) {
  const links = getLinksFromMD(page.content)
  writeFileSync('./public/indexes.functions.json', JSON.stringify(links))
}

function getLinksFromMD(mdContent: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)(.+)/g
  let links: Record<string, string> = {}
  let match
  while ((match = regex.exec(mdContent)) !== null) {
    if ((match[2] as string).startsWith('#')) {
      continue
    }
    links[removeEscapedSymbols(match[2])] =
      removeEscapedSymbols(match[1]) + removeEscapedSymbols(match[3])
  }
  return links
}

function removeEscapedSymbols(text: string): string {
  return text.replace(/\\_/g, '_').replace(/\\-/g, '-')
}
