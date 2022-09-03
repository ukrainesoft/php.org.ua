export async function fetchTextData(uri: string) {
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3.text-match+json',
    },
  })

  const text = await res.text()
  console.log(text)

  return text
}
