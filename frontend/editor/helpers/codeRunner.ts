export default async function (code: string): Promise<string> {
  const host =
    process.env.NEXT_PUBLIC_CODE_RUNNDER_HOST || 'https://run.php.band'
  return await (await fetch(host, { method: 'POST', body: code })).text()
}
