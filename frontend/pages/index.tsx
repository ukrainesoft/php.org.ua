import { getStaticProps as getStaticPropsOfManualPage } from './manual/uk/[slug]'

export { default } from '../components/page'

export const getStaticProps = async () => {
  const { props } = await getStaticPropsOfManualPage({
    params: { slug: 'index.md' },
  })

  props.page.content =
    props.page.content.replace(/\]\(/gim, '](/manual/uk/') || ''

  return { props }
}
