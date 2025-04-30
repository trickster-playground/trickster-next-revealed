import Header from '@/components/Header';
import React from 'react';
import { IconBook } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const page = () => {
  const className = `flex w-[128px] justify-center items-center space-x-2 rounded-lg p-3 border-2 border-white`;
  return (
    <div>
      <Header />
      <div className='divide-y divide-gray-200 dark:divide-gray-700 max-w-4xl'>
        <div className='space-y-2 py-6 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
            Sistem Informasi Retribusi Daerah Provinsi Kalimantan Barat
          </h1>
          <p className='!mt-2 text-lg leading-3 text-blue-500'>
            By PT Tiara Pilar Kreasi
          </p>
          <div className='popular-tags grid grid-cols-3 gap-4 py-1 xl:grid-cols-6'>
            <Link
              href='https://laravel.com/'
              className={cn(`bg-gray-800`, className)}
            >
              <Image
                src={'/static/icons/Laravel.svg'}
                alt='next-js'
                width={5}
                height={5}
                className='h-6 w-6'
              />
              <div className='my-auto text-white'>Laravel</div>
            </Link>
            <Link
              href='https://laravel.com/'
              className={cn(`bg-purple-800`, className)}
            >
              <Image
                src={'/static/icons/bootstrap.svg'}
                alt='next-js'
                width={5}
                height={5}
                className='h-7 w-7'
              />
              <div className='my-auto text-white'>Bootstrap</div>
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
              <div className='my-auto text-white'>Javascript</div>
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
              <div className='my-auto text-white'>Php</div>
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
              <div className='my-auto text-white'>MySQL</div>
            </Link>
            
          </div>
        </div>

        <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
          <li className='py-6'>
            <article>
              <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                <dl>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                    <time>April 2023 - August 2024</time>
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
                          Sistem Informasi Rusunawa Dinas Perumahan dan
                          Permukiman Kota Pontianak
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
                          Livewire
                        </Link>
                        <Link
                          href={`/`}
                          className='mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400'
                        >
                          Filament
                        </Link>
                        <Link
                          href={`/`}
                          className='mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400'
                        >
                          MySQL
                        </Link>
                      </div>
                    </div>
                    <div className='prose max-w-none text-gray-300'>
                      An Information System to facilitate public communication
                      and information, provide transparent information for
                      prospective Rusunawa residents, and increase the
                      efficiency of internal data management such as room data,
                      occupants, payments and resident complaints.
                    </div>
                  </div>
                  <div className='flex gap-4 text-base font-medium leading-6 text-destructive'>
                    <Link
                      href={`https://rusunkite.pontianak.go.id/`}
                      className='text-primary hover:text-sky-600 dark:hover:text-sky-400'
                    >
                      Check site &rarr;
                    </Link>
                    <p className='text-white'>|</p>
                    <Link
                      href={`/documentation/rusunawa`}
                      className='flex items-center gap-2   text-emerald-400 hover:text-emerald-500'
                    >
                      Documentation <IconBook className='size-5' />
                    </Link>
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
