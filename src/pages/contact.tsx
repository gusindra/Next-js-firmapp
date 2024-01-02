import React, { useState } from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AssetUrl } from '../utils/AssetUrl';

const Contact = () => {
  const [input, setInput] = useState('');
  //   e.preventDefault();
  //   try {
  //     const res = await fetch('./api/subscribe', {
  //       method: 'post',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         emailAddress: input,
  //       }),
  //     });

  //     if (res.status === 200) {
  //       alert('You are subscribed!');
  //     } else {
  //       alert('Sorry, something went wrong.');
  //     }
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="grid max-w-screen-xl px-4 pt-20 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-1 lg:pt-28">
          <div className="flex justify-center">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl dark:text-white">
              Try FirmApps Today
            </h1>
          </div>
        </div>
        <div className="grid max-w-screen-xl px-4  pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:pb-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
            <div>
              <img
                src={AssetUrl.contact_img}
                alt="hero image"
                className="w-full"
              />
            </div>
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              <ul>
                <li>
                  If you’re curious about how FirmApps.ai solutions can help the
                  performance of your workforce, and boost profitability, let us
                  show you how it works.
                </li>
              </ul>
            </p>
            <form className="w-full max-w-lg">
              <div className="grid grid-cols-10 -mx-3 mb-6">
                <div className="w-full col-span-3 px-3 mb-6 md:mb-0">
                  <div className="relative">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Job Title
                    </label>
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Employee</option>
                      <option>Manager</option>
                      <option>Director</option>
                      <option>Owner</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full col-span-7 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Full Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder="Sean"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Email
                  </label>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="sean@company.com"
                  />
                  {/* <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p> */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    WhatsApp
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="081234567899"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Company Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="PT Suka Jaya"
                  />
                  {/* <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Contact;
