import { fetchGithubText } from './external/transport/fetchGithubRawText'

export type SearchResult = {
  name: string
  path: string
  text: string
}
export async function getSearchResult(query: string): Promise<SearchResult[]> {
  let result: SearchResult[] = []
  let githubResponse = JSON.parse(await fetchGithubText(query))
  if (!githubResponse.items) {
    return result
  }
  for (const item of githubResponse.items) {
    result.push({
      name: item.name,
      // TODO refactor
      path: '/' + item.path.replace('md/', 'manual/'),
      text: item.text_matches[0].fragment,
    })
  }
  return result
}
