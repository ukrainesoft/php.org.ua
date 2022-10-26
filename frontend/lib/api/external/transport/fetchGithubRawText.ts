export const fetchGithubText = async (uri: string): Promise<string> =>
  (
    await fetch(uri, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3.text-match+json',
      },
    })
  ).text()
