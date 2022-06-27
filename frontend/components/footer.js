import Container from './container';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  const { slug } = router.query;
  const getGithubUrl = (isEdit, slug) => {
    // TODO Move to an env variable
    return `https://github.com/ukrainesoft/php.org.ua/${
      isEdit ? 'edit' : 'blob'
    }/master/manual/md/uk/${slug || ''}`;
  };

  return (
    <footer className='bg-accent-1 border-t border-accent-2'>
      <Container>
        <div className='py-28 flex flex-col lg:flex-row items-center'>
          <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
            Learn PHP in Ukrainian
          </h3>
          <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
            <a
              href={getGithubUrl(false, slug)}
              className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0'
              target='_blank'
            >
              View on GitHub
            </a>
            <a
              href={getGithubUrl(true, slug)}
              className='mx-3 font-bold hover:underline'
              target='_blank'
            >
              Edit on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
