import React from 'react';

import { GetStaticProps } from 'next';

import { Meta } from '../layout/Meta';
import { IProductListProps, ProductList } from '../lists/ProductList';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Product';

const Product = (props: IProductListProps) => (
  <Main
    meta={
      <Meta
        title="Our Product"
        description="ViGuard Vision AI Solution & HiReach AI Solution"
      />
    }
  >
    <ProductList posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticProps: GetStaticProps<IProductListProps> = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'image',
    'description',
    'url',
  ]);
  const pagination: IPaginationProps = {};

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Product;
