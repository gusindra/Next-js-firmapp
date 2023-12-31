import React from 'react';

import { useRouter } from 'next/router';

import ThemeSwitcher from '../components/ThemeSwitcher';
import { AssetUrl } from '../utils/AssetUrl';

export const Header = () => {
  const router = useRouter();
  return (
    <header className="fixed w-full z-50">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href={'/'} className="flex items-center">
            <img
              src={AssetUrl.logo}
              className="h-20 mr-3 sm:h-20"
              alt="FirmApps AI Logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href={'/product'}
              className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Try Demo
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="mx-4">
              <ThemeSwitcher></ThemeSwitcher>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href={'/'}
                  className={
                    router.pathname === '/'
                      ? 'lg:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li className="group relative dropdown pb-4 cursor-pointer font-bold text-base tracking-wide">
                <a
                  className={
                    router.pathname === '/product/[slug]'
                      ? 'lg:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }
                >
                  Product
                </a>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul className="top-0 w-full shadow mt-3 dark:bg-gray-900 bg-white px-4 py-1">
                    <li className="mb-3 hover:underline dark:bg-gray-900 bg-white">
                      <a
                        href={'/product/viguard'}
                        className="block w-full no-underline text-gray-700 dark:text-gray-300 font-bold text-base hover:text-blue-100 cursor-pointer"
                      >
                        ViGuard
                      </a>
                    </li>
                    <li className="mb-3 hover:underline dark:bg-gray-900 bg-white">
                      <a
                        href={'/product/hireach'}
                        className="block w-full no-underline text-gray-700 dark:text-gray-300 font-bold text-base hover:text-blue-100 cursor-pointer"
                      >
                        HiReach
                      </a>
                    </li>
                    {/* <li className="py-1">
                    <a className="block text-white font-bold text-base uppercase hover:text-blue-700 cursor-pointer">
                      Item 2
                    </a>
</li> */}
                  </ul>
                </div>
              </li>

              <li>
                <a
                  href={'/solution'}
                  className={
                    router.pathname === '/solution'
                      ? 'lg:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }
                >
                  Solution
                </a>
              </li>
              <li>
                <a
                  href={'/contact'}
                  className={
                    router.pathname === '/contact'
                      ? 'lg:text-blue-400'
                      : 'text-gray-700'
                  }
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

// export default Header;
