type Page = {
  slug: string
  title: string
  content: string
  navigation?: Record<string, string>[]
  contentType: PageContentType
}

export enum PageContentType {
  html,
  text,
  md,
}

export default Page
