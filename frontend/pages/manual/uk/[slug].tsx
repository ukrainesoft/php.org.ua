import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../../components/container'
import PostBody from '../../../components/post-body'
import Header from '../../../components/header'
import Layout from '../../../components/layout'
import { getPostBySlug, getAllPosts } from '../../../lib/api'
import PostTitle from '../../../components/post-title'
import Head from 'next/head'
import { CMS_TITLE, CMS_WESITE_NAME } from '../../../lib/constants'
import markdownToHtml from '../../../lib/markdownToHtml'
import PostType from '../../../types/post'

type Props = {
  post: PostType
  preview?: boolean
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | {CMS_WESITE_NAME} {CMS_TITLE}
                </title>
              </Head>
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title', 'slug', 'content'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
