import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { Content } from '../../content/Content';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { markdownToHtml } from '../../utils/Markdown';
import { getAllPosts, getPostBySlug } from '../../utils/Product';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  title: string;
  description: string;
  image: string;
  content: string;
};

const DisplayProduct = (props: IPostProps) => (
  <Main meta={<Meta title={props.title} description={props.description} />}>
    <Content>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Content>
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({
  params,
}) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      title: post.title,
      description: post.description,
      date: post.date,
      modified_date: post.modified_date,
      image: post.image,
      content,
    },
  };
};

export default DisplayProduct;
