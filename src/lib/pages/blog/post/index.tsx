'use client';

import { AspectRatio, Box, Image, useColorModeValue } from '@chakra-ui/react';
import type { GiscusProps } from '@giscus/react';
import Giscus from '@giscus/react';
import { notFound } from 'next/navigation';

import BlogPostHead from '~/lib/components/blog/post/Head';
import BlogPostMeta from '~/lib/components/blog/post/Meta';
import MarkdownContent from '~/lib/components/shared/MarkdownContent';
import ShareButtons from '~/lib/components/shared/ShareButtons';
import { sortedBlogPosts } from '~/lib/constants/blog';
import { unsplashImg } from '~/lib/utils/unsplashImg';

import type { BlogPostProps } from './types';

const BlogPost = ({ params }: BlogPostProps) => {
  const giscusTheme: GiscusProps['theme'] = useColorModeValue('light', 'dark');

  const postData = sortedBlogPosts.find(({ id }) => id === params.id);

  if (!postData) {
    return notFound();
  }

  return (
    <Box as="article">
      <BlogPostMeta postData={postData} />

      <AspectRatio
        width="full"
        ratio={3 / 1}
        marginBottom={8}
        boxShadow="lg"
        borderRadius={{ base: 12, md: 24 }}
      >
        <Image
          src={unsplashImg(postData.cover, 2160)}
          fit="cover"
          borderRadius={{ base: 12, md: 24 }}
        />
      </AspectRatio>

      <BlogPostHead postData={postData} />

      <MarkdownContent rawContent={postData.body.raw} />

      <ShareButtons title={`Check out this blog post: ${postData.title}`} />

      <Box marginY={12}>
        <Giscus
          repo="novinbukannopin/porto-new"
          repoId="R_kgDOKJ862Q"
          mapping="pathname"
          category="General"
          categoryId="DIC_kwDOKJ862c4CYxzt"
          reactionsEnabled="1"
          theme={giscusTheme}
          emitMetadata="0"
        />
      </Box>
    </Box>
  );
};

export default BlogPost;
