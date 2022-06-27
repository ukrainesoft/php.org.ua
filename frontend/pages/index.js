import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getPostBySlug } from '../lib/api';
import Head from 'next/head';
import { CMS_TITLE } from '../lib/constants';
import markdownToHtml from '../lib/markdownToHtml';

export default function Index({ heroPost }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_TITLE}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title || heroPost.slug}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              content={heroPost.content}
            />
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const heroPost = getPostBySlug('index.md', [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'content',
  ]);
  heroPost.content = await markdownToHtml(heroPost.content.replace(/\]\(/gim, '\]\(\/manual/uk/') || '');

  return {
    props: { heroPost },
  };
}
