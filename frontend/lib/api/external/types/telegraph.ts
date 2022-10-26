export type TelegraphApiNodeElement = {
  tag: string
  attrs?: { [k: string]: string }
  children: (TelegraphApiNodeElement | string)[]
}

export type TelegraphApiPageResponse = {
  ok: 'true' | 'false'
  result: {
    author_name: string
    content: TelegraphApiNodeElement[]
    description: string
    path: string
    title: string
    url: string
    views: number
  }
}
