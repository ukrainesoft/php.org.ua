import { fetchJson } from './external/transport/fetchJson'

export type SearchResult = {
  name: string
  path: string
  text: string
}
export async function getSearchResult(search: string): Promise<SearchResult[]> {
  let response: Record<string, string> = await fetchJson(
    process.env.NEXT_PUBLIC_SEARCH_URL as string
  )
  if (!response) {
    return []
  }

  return Object.entries(response)
    .filter(([path, text]) => path.includes(search) || text.includes(search))
    .map(([path, text]) => ({
      name: text,
      // TODO refactor
      path: '/manual/uk/' + path,
      text,
    }))
}
