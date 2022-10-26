export const fetchJson = async (uri: string): Promise<any> =>
  (
    await fetch(uri, {
      method: 'GET',
    })
  ).json()
