import { ArticleJsonLd } from 'next-seo';

import type { Blog } from 'contentlayer/generated';
import { baseUrl } from '~/lib/constants/baseUrl';

type BlogPostMetaProps = {
  postData: Blog;
};

const BlogPostMeta = ({ postData }: BlogPostMetaProps) => {
  return (
    <ArticleJsonLd
      useAppDir
      type="Blog"
      url={`${baseUrl}/blog/${postData.id}`}
      title={`${postData.title} | Novin`}
      images={[]}
      datePublished={new Date(postData.date).toISOString()}
      dateModified={new Date(postData.date).toISOString()}
      authorName="Novin Ardian Y."
      description={`A blog post by Novin Ardian Y. explaining about ${postData.title}`}
    />
  );
};

export default BlogPostMeta;
