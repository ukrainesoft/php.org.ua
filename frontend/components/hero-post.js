import Avatar from '../components/avatar';
import DateFormatter from '../components/date-formatter';
import CoverImage from '../components/cover-image';
import Link from 'next/link';
import PostBody from './post-body';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  content,
}) {
  return (
    <section>
      <div className='mb-8 md:mb-16'>
        {/* <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        /> */}
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
          <PostBody content={content} />
        </div>
      </div>
    </section>
  );
}
