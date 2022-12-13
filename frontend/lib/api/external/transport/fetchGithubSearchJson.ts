type GitHubSearchResultType = {
  items: {
    name: string
    path: string
    text: string
  }[]
}

export const fetchGithubSearchJson = async (
  text: string
): Promise<GitHubSearchResultType> =>
  (
    await fetch(
      `${process.env.NEXT_PUBLIC_GITHUB_API_SEARCH_URL}`.replace('%s', text),
      {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github.v3.text-match+json',
        },
      }
    )
  ).json()
