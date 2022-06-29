export async function getSearchResult(query: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GITHUB_API_SEARCH_URL}`.replace('%s', query),
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3.text-match+json',
      },
    }
  )

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch data from the GitHub API')
  }

  return json
}
