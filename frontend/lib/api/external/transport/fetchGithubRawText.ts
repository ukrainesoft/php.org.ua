export const fetchGithubText = async (text: string): Promise<string> =>
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
  ).text()
