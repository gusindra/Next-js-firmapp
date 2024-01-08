import React, { useState } from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AssetUrl } from '../utils/AssetUrl';

const Contact = () => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = {
      title,
      name,
      email,
      phone,
      company,
      message,
    };
    console.log(form);
    try {
      const rawResponse = await fetch('/api/googlesheet', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const content = await rawResponse.json();
      // print to screen
      console.log(content.data.tableRange);
    } catch (err) {
      console.log(err);
    }

    // Reset the form fields
    setMessage('');
    setTitle('');
    setCompany('');
    setPhone('');
    setName('');
    setEmail('');
  };

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
          <div className="mr-auto place-self-center lg:col-span-7 max-w-lg">
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              <ul>
                <li>
                  If you’re curious about how FirmApps.ai solutions can help the
                  performance of your workforce, and boost profitability, let us
                  show you how it works.
                </li>
              </ul>
            </p>
            <form className="w-full " onSubmit={handleSubmit}>
              <div className="grid grid-cols-10 -mx-3 mb-6">
                <div className="w-full col-span-3 px-3 mb-6 md:mb-0">
                  <div className="relative">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Job Title
                    </label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="title"
                      type="text"
                      placeholder="Owner"
                    />
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
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
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="message"
                    placeholder="Your message here"
                  />
                  {/* <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p> */}
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Send
                    </button>
                  </div>
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
