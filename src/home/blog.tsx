import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Blog = (props: IMainProps) => (
  <div className="max-w-screen-md mx-auto">
    <div className="border-b border-gray-300">
      <div className="pt-16 pb-8">
        <div className="font-semibold text-3xl text-gray-900">
          {AppConfig.title}
        </div>
        <div className="text-xl">{AppConfig.description}</div>
        <div>test</div>
      </div>
      <div>
        <Navbar>
          <li className="mr-6">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about/">
              <a>Product</a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about/">
              <a>Solution</a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about/">
              <a>Contact</a>
            </Link>
          </li>
        </Navbar>
      </div>
    </div>

    <div className="text-xl py-5">{props.children}</div>

    <div className="border-t border-gray-300 text-center py-8 text-sm">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
      <span role="img" aria-label="Love">
        ♥
      </span>{' '}
      by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
      {/*
       * PLEASE READ THIS SECTION
       * We'll really appreciate if you could have a link to our website
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * Thank you for your support it'll mean a lot for us.
       */}
    </div>
  </div>
);

export { Blog };
