import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TechStack = () => {
  return (
    <div className='flex items-center space-x-1'>
      <span className='mr-1 text-gray-500 dark:text-gray-400'>Build with</span>

      <div className='flex space-x-1.5'>
        <Link href='https://nextjs.org'>
          <Image
            src={'/static/icons/nextjs.svg'}
            alt='next-js'
            width={5}
            height={5}
            className='h-5 w-5 invert'
          />
        </Link>
        <Link href='https://tailwindcss.com'>
          <Image
            src={'/static/icons/tailwind.svg'}
            alt='tailwind-css'
            width={5}
            height={5}
            className='h-5 w-5'
          />
        </Link>
        <Link href='https://www.typescriptlang.org'>
          <Image
            src={'/static/icons/typescript.svg'}
            alt='typescript'
            width={5}
            height={5}
            className='h-5 w-5'
          />
        </Link>
        <Link href='https://react.dev' className='pl-px'>
          <Image
            src={'/static/icons/react.svg'}
            alt='react'
            width={5}
            height={5}
            className='h-5 w-5'
          />
        </Link>
        <Link href='https://ui.shadcn.com/' className='pl-px'>
          <Image
            src={'/static/icons/shadcn-ui.svg'}
            alt='shad-cn'
            width={5}
            height={5}
            className='h-5 w-5 invert'
          />
        </Link>
      </div>
      <span className='px-1 text-gray-400 dark:text-gray-500'>-</span>
      <Link
        href={'https://github.com/trickster-playground'}
        className='text-gray-500 underline underline-offset-4 dark:text-gray-400'
      >
        <span className='mr-2'>View source</span>
      </Link>
    </div>
  );
};

export default TechStack;
