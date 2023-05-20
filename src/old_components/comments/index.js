import siteMetadata from '@/data/siteMetadata';
import dynamic from 'next/dynamic';

const UtterancesComponent = dynamic(
  () => {
    return import('./Utterances');
  },
  { ssr: false }
);
const GiscusComponent = dynamic(
  () => {
    return import('./Giscus');
  },
  { ssr: false }
);
const DisqusComponent = dynamic(
  () => {
    return import('./Disqus');
  },
  { ssr: false }
);

const Comments = ({ frontMatter }) => {
  const comment = siteMetadata?.comment;
  if (!comment || Object.keys(comment).length === 0) return <></>;
  return (
    <div id="comment">
      {siteMetadata.comment && siteMetadata.comment.provider === 'giscus' && (
        <GiscusComponent />
      )}
      {siteMetadata.comment &&
        siteMetadata.comment.provider === 'utterances' && (
          <UtterancesComponent />
        )}
      {siteMetadata.comment && siteMetadata.comment.provider === 'disqus' && (
        <DisqusComponent frontMatter={frontMatter} />
      )}
    </div>
  );
};

export default Comments;
