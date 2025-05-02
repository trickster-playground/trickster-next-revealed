import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Tags = () => {
  const className = `flex w-[128px] justify-center items-center space-x-2 rounded-lg p-3 border-white border-2 transition hover:brightness-110`;
  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='space-y-2 py-6 md:space-y-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
          Tech Stacks
        </h1>
        <p className='!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400'>
          I have learn various tech stacks, focusing on the most popular technologies
          in web development.
        </p>
      </div>

      <div className='popular-tags grid grid-cols-3 gap-4 py-6 xl:grid-cols-6 text-white brightness-110'>
        <Link
          href='https://nextjs.org/'
          className={cn(`bg-blue-800`, className)}
        >
          <Image
            src={'/static/icons/nextjs.svg'}
            alt='next-js'
            width={5}
            height={5}
            className='h-6 w-6 invert'
          />
          <div className='my-auto text-white'>NextJs</div>
        </Link>
        <Link
          href='https://laravel.com/'
          className={cn(`bg-gray-800`, className)}
        >
          <Image
            src={'/static/icons/Laravel.svg'}
            alt='laravel'
            width={5}
            height={5}
            className='h-6 w-6 '
          />
          <div className='my-auto text-white'>Laravel</div>
        </Link>
        <Link href='https://react.dev/' className={cn(`bg-sky-600`, className)}>
          <Image
            src={'/static/icons/react.svg'}
            alt='react'
            width={5}
            height={5}
            className='h-6 w-6 '
          />
          <div className='my-auto text-white'>React</div>
        </Link>
        <Link href='https://getbootstrap.com/' className={cn(`bg-purple-700`, className)}>
          <Image
            src={'/static/icons/bootstrap.svg'}
            alt='bootstrap'
            width={5}
            height={5}
            className='h-6 w-6 '
          />
          <div className='my-auto text-white'>Bootstrap</div>
        </Link>
        <Link href='https://tailwindcss.com/' className={cn(`bg-sky-700`, className)}>
          <Image
            src={'/static/icons/tailwind.svg'}
            alt='tailwind'
            width={5}
            height={5}
            className='h-6 w-6 '
          />
          <div className='my-auto text-white'>Tailwind</div>
        </Link>
        <Link
          href='https://www.typescriptlang.org/'
          className={cn(`bg-blue-500`, className)}
        >
          <Image
            src={'/static/icons/typescript.svg'}
            alt='typescript'
            width={5}
            height={5}
            className='h-6 w-6 '
          />
          <div className='my-auto text-white'>Typescript</div>
        </Link>
        <Link
          href='https://www.javascript.com/'
          className={cn(`bg-yellow-600`, className)}
        >
          <Image
            src={'/static/icons/javascript2.svg'}
            alt='javascript'
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
            alt='php'
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
            alt='mysql'
            width={5}
            height={5}
            className='h-6 w-6 '
          />
          <div className='my-auto text-white'>MySQL</div>
        </Link>
        <Link
          href='https://www.postgresql.org/'
          className={cn(`bg-sky-900`, className)}
        >
          <Image
            src={'/static/icons/postgres.svg'}
            alt='postgresql'
            width={5}
            height={5}
            className='h-6 w-6 '
          />
          <div className='my-auto text-white'>Postgre</div>
        </Link>
        <Link
          href='https://www.mongodb.com/'
          className={cn(`bg-green-700`, className)}
        >
          <Image
            src={'/static/icons/mongodb.svg'}
            alt='mongodb'
            width={5}
            height={5}
            className='h-6 w-6 '
          />
          <div className='my-auto text-white'>MongoDB</div>
        </Link>
        <Link href='https://github.com/' className={cn(`bg-black`, className)}>
          <Image
            src={'/static/icons/github.svg'}
            alt='github'
            width={5}
            height={5}
            className='h-6 w-6 invert'
          />
          <div className='my-auto text-white'>Github</div>
        </Link>

      </div>
    </div>
  );
};

export default Tags;
