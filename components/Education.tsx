import Link from 'next/link';
import React from 'react';

const Education = () => {
  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700 max-w-4xl'>
      <div className='space-y-2 py-6 md:space-y-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
          Education
        </h1>
        <p className='!mt-2 text-lg leading-7 text-blue-500'>
          Informatics Engineering - Tanjungpura University
        </p>
        <p className='!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400'>
          Bachelor of Computer Science - GPA : 3.34
        </p>
      </div>

      <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
        <li className='py-6'>
          <article>
            <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
              <dl>
                <dt className='sr-only'>Published on</dt>
                <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                  <time>Sept 2018 - January 2024</time>
                </dd>
              </dl>
              <div className='space-y-5 xl:col-span-3'>
                <div className='space-y-4'>
                  <div>
                    <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                      <Link
                        href={'/'}
                        className='text-gray-900 dark:text-gray-100'
                      >
                        <span className='text-blue-500'>Thesis : </span>
                        E-Sports Tournament Information System and Gaming Café
                        in Pontianak City Based on Website
                      </Link>
                    </h2>
                    <div className='flex flex-wrap'>
                      <Link
                        href={`/`}
                        className='mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400'
                      >
                        Laravel 10
                      </Link>
                      <Link
                        href={`/`}
                        className='mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400'
                      >
                        Leaflet Js
                      </Link>
                      <Link
                        href={`/`}
                        className='mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400'
                      >
                        Facebook API
                      </Link>
                      <Link
                        href={`/`}
                        className='mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400'
                      >
                        Challonge API
                      </Link>
                      <Link
                        href={`/`}
                        className='mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400'
                      >
                        MySQL
                      </Link>
                    </div>
                  </div>
                  <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                    A website-based information system designed to help gamers
                    find information about tournaments and coffee shop
                    references for gaming in Pontianak City. This system
                    includes locations and reviews from gamers who have visited
                    the coffee shops. Additionally, it aims to assist coffee
                    shops in Pontianak City in organizing gaming tournaments.
                  </div>
                </div>
                <div className='text-base font-medium leading-6 text-destructive'>
                  <Link
                    href={`https://gamersworld-ptk.elmarsdigitech.com/`}
                    className='text-primary hover:text-sky-600 dark:hover:text-sky-400'
                  >
                    Check site &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
};

export default Education;
