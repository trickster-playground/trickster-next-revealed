import Header from '@/components/Header';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { IconArrowNarrowLeft } from '@tabler/icons-react';

const page = () => {
  const className = `flex w-full justify-center items-center space-x-2 rounded-lg p-3 border-2 border-white`;
  return (
    <div>
      <Header />
      <div className='divide-y divide-gray-200 dark:divide-gray-700 max-w-4xl p-2'>
        <div className='space-y-2 py-4 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
            Sistem Informasi Rusunawa Dinas Perumahan dan Permukiman Kota
            Pontianak
          </h1>
          <p className='!mt-2 text-lg leading-3 text-blue-500'>
            By PT Tiara Pilar Kreasi
          </p>
          <div className='w-full grid grid-cols-5 gap-2 xl:grid-cols-5 p-1'>
            <Link
              href='https://laravel.com/'
              className={cn(`bg-gray-800`, className)}
            >
              <Image
                src={'/static/icons/Laravel.svg'}
                alt='next-js'
                width={5}
                height={5}
                className='size-6'
              />
              <div className='my-auto hidden md:block text-white'>Laravel</div>
            </Link>
            <Link
              href='https://laravel.com/'
              className={cn(`bg-yellow-500`, className)}
            >
              <Image
                src={'/static/icons/Filament.svg'}
                alt='next-js'
                width={10}
                height={10}
                className='size-8'
              />
              <div className='my-auto hidden md:block text-white'>Filament</div>
            </Link>
            <Link
              href='https://www.javascript.com/'
              className={cn(`bg-yellow-600`, className)}
            >
              <Image
                src={'/static/icons/javascript2.svg'}
                alt='next-js'
                width={5}
                height={5}
                className='h-6 w-6 '
              />
              <div className='my-auto hidden md:block text-white'>
                Javascript
              </div>
            </Link>
            <Link
              href='https://www.php.net/'
              className={cn(`bg-indigo-900`, className)}
            >
              <Image
                src={'/static/icons/php.svg'}
                alt='next-js'
                width={7}
                height={7}
                className='size-7'
              />
              <div className='my-auto hidden md:block text-white'>Php</div>
            </Link>
            <Link
              href='https://www.mysql.com/'
              className={cn(`bg-slate-700`, className)}
            >
              <Image
                src={'/static/icons/mysql.svg'}
                alt='next-js'
                width={5}
                height={5}
                className='h-6 w-6 '
              />
              <div className='my-auto hidden md:block text-white'>MySQL</div>
            </Link>
          </div>
        </div>

        <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
          <li className='py-6'>
            <article>
              <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                <dl>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base font-medium leading-6 text-white'>
                    <time>April 2023 - August 2024</time>
                  </dd>
                </dl>
                <div className='space-y-5 xl:col-span-3'>
                  <div className='space-y-4'>
                    <div>
                      <Image src="/static/images/projects/R.png" alt="Rusun" width={1902} height={958} layout="responsive" />

                    </div>
                    <div className='prose text-justify max-w-none text-white'>
                      An Information System to facilitate public communication
                      and information, provide transparent information for
                      prospective Rusunawa residents, and increase the
                      efficiency of internal data management such as room data,
                      occupants, payments and resident complaints.
                    </div>
                    <div>
                      <Image
                        src={'/static/images/projects/Slide2.png'}
                        alt='Rusun'
                        width={1902}
                        height={958}
                        className='w-full'
                      />
                    </div>
                    <div className='prose text-justify max-w-none text-white'>
                      The page displays information which is divided into 3,
                      namely the terms and conditions for becoming a resident,
                      the rules for residents of the flat, and the operational
                      standards for payment of rental fees for flats.
                    </div>
                    <div>
                      <Image
                        src={'/static/images/projects/Slide3.png'}
                        alt='Rusun'
                        width={1902}
                        height={958}
                        className='w-full'
                      />
                    </div>
                    <div className='prose text-justify max-w-none text-white'>
                      On this page, you can instantly see the availability status of rooms in each rusun. Occupied rooms are highlighted with a specific color, while vacant rooms remain unmarked for quick identification. Plan your move effortlessly!
                    </div>
                    <div>
                      <Image
                        src={'/static/images/projects/Slide4.png'}
                        alt='Rusun'
                        width={1902}
                        height={958}
                        className='w-full'
                      />
                    </div>
                    <div className='prose text-justify max-w-none text-white'>
                      On this page, users can access the registration form to apply as a Rusunawa resident and view the required documents needed for the application process.
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
