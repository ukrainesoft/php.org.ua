import { getPostBySlug } from '../lib/api/page'
import markdownToHtml from '../lib/markdownToHtml'
import Post from '../types/post'
import PostComponent, {
  getStaticProps as getStaticPropsFromPost,
} from './manual/uk/[slug]'

type Props = {
  post: Post
}

const Index = ({ post }: Props) => {
  return <PostComponent post={post} />
}

export default Index

export const getStaticProps = async () => {
  // index.md as mvp, later here should be HeroPost, etc.
  let post = await getPostBySlug('index.md', ['title', 'slug', 'content'])
  post.content = await markdownToHtml(
    post.content.replace(/\]\(/gim, '](/manual/uk/') || ''
  )

  return {
    props: {
      post,
    },
  }
}
