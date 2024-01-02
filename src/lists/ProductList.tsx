import React from 'react';

import { IPaginationProps } from '../pagination/Pagination';
import { ProductItems } from '../utils/Product';

export type IProductListProps = {
  posts: ProductItems[];
  pagination: IPaginationProps;
};

const ProductList = (props: IProductListProps) => (
  <>
    <div>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {props.posts.map((elt, i) =>
            !(i % 2) ? (
              <div
                key={elt.slug}
                className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"
              >
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {elt.title}
                  </h2>
                  <p className="mb-8 font-light lg:text-xl">
                    {elt.description}
                  </p>

                  {/* <ul
                    role="list"
                    className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                  >
                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        Item 1
                      </span>
                    </li>
                  </ul> */}

                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a
                      href={elt.url}
                      className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Learn about {elt.title}
                    </a>
                  </div>
                </div>
                <div className="text-center flex justify-center">
                  <img
                    className="hidden w-1/2 mb-4 rounded-lg lg:mb-0 lg:flex"
                    src={elt.image}
                    alt="dashboard feature image"
                  />
                </div>
              </div>
            ) : (
              <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="text-center flex justify-center">
                  <img
                    className="hidden w-2/3 mb-4 rounded-lg lg:mb-0 lg:flex"
                    src={elt.image}
                    alt="feature image 2"
                  />
                </div>
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {elt.title}
                  </h2>
                  <p className="mb-8 font-light lg:text-xl">
                    {elt.description}
                  </p>

                  {/* <ul
                    role="list"
                    className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                  >
                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        Item 1
                      </span>
                    </li>
                  </ul> */}

                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a
                      href={elt.url}
                      className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Learn about {elt.title}
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  </>
);

export { ProductList };
