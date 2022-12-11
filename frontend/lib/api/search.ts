import { fetchGithubText } from './external/transport/fetchGithubRawText'

export type SearchResult = {
  name: string
  path: string
  text: string
}
export async function getSearchResult(text: string): Promise<SearchResult[]> {
  let githubResponse = JSON.parse(await fetchGithubText(text))
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
