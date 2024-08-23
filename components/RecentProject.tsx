import Link from 'next/link';
import React from 'react';

const RecentProject = () => {
  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700 max-w-4xl'>
      <div className='space-y-2 py-6 md:space-y-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
          Work Experience
        </h1>
        <p className='!mt-2 text-lg leading-7 text-blue-500'>
          PT Tiara Pilar Kreasi | Elmarsdigitech - IT Consultant.
        </p>
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
                        Sistem Informasi Rusunawa Dinas Perumahan dan Permukiman
                        Kota Pontianak
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
                  <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                    An Information System to facilitate public communication and
                    information, provide transparent information for prospective
                    Rusunawa residents, and increase the efficiency of internal
                    data management such as room data, occupants, payments and
                    resident complaints.
                  </div>
                </div>
                <div className='text-base font-medium leading-6 text-destructive'>
                  <Link
                    href={`https://rusunkite.pontianak.go.id/`}
                    className='text-primary hover:text-sky-600 dark:hover:text-sky-400'
                  >
                    Check site &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className='py-6'>
          <article>
            <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
              <dl>
                <dt className='sr-only'>Published on</dt>
                <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                  <time>May 2022 - February 2023</time>
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
                        Sistem Informasi Retribusi Daerah Provinsi Kalimantan
                        Barat
                      </Link>
                    </h2>
                    <div className='flex flex-wrap'>
                      <Link
                        href={`/`}
                        className='mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400'
                      >
                        Laravel 8
                      </Link>
                      <Link
                        href={`/`}
                        className='mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400'
                      >
                        Bootstrap 5
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
                    An Information System designed to assist the West Kalimantan
                    Province Regional Revenue Agency in monitoring and managing
                    regional levy receipts online and in real-time.
                  </div>
                </div>
                <div className='text-base font-medium leading-6 text-red-500'>
                  Web is private
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
};

export default RecentProject;
