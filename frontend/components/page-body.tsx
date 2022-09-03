import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

export default ({ content }: Props) => {
  return (
    <article className="mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}
