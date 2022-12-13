import { fetchGithubSearchJson } from './external/transport/fetchGithubSearchJson'

export type SearchResult = {
  name: string
  path: string
  text: string
}
export async function getSearchResult(text: string): Promise<SearchResult[]> {
  let githubResponse = await fetchGithubSearchJson(text)
  if (!githubResponse.items) {
    return []
  }

  return githubResponse.items.map((item: any) => ({
    name: item.name,
    // TODO refactor
    path: '/' + item.path.replace('md/', 'manual/'),
    text: item.text_matches[0].fragment,
  }))
}
