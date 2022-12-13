export const fetchGithubMdFile = async (url: string): Promise<string> =>
  (
    await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3.text-match+json',
      },
    })
  ).text()
