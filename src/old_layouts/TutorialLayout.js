import SectionContainer from '@/old_components/SectionContainer';
import {BlogSEO} from '@/old_components/SEO';
import siteMetadata from '@/data/siteMetadata';
import ScrollTopAndComment from '@/old_components/ScrollTopAndComment';
import TOCInline from '@/old_components/TOCInline';

const editUrl = (fileName) =>
  `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`;

const postDateTemplate = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export default function TutorialLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
  toc,
}) {
  const { slug, fileName, date, title, images, tags } = frontMatter;

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <section className="md:grid md:grid-cols-10 md:gap-6">
        <aside className="sticky top-0 hidden max-h-screen self-start overflow-auto pr-10 pb-64 md:col-span-3 md:block">
          <div className="mb-6 mt-2 flex items-center space-x-3">
            <img
              src={'/static/logos/javascript.svg'}
              width="48"
              height="auto"
              alt={'post.fields.slug'}
            />
            <div>
              <div className="font-serif text-xl font-bold leading-tight tracking-widest">
                {' '}
                {'JavaScript'} <br /> Notes
              </div>
            </div>
          </div>
          <div className="tocTutorial prose">
            <TOCInline toc={toc} exclude="Overview" toHeading={4} />
          </div>
        </aside>

        <article className="max-w-none md:col-span-7">
          <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
            {children}
          </div>
        </article>
      </section>
    </SectionContainer>
  );
}
