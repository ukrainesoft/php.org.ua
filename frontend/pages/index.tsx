import { getStaticProps as getStaticPropsOfManualPage } from './manual/uk/[slug]'

export { default } from '../components/page'

export const getStaticProps = async () => {
  const { props } = await getStaticPropsOfManualPage({
    params: { slug: 'index.md' },
  })

  props.page.content =
    props.page.content.replace(/href=\"/gim, 'href="/manual/uk/') || ''

  return { props }
}
