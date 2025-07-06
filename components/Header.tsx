'use client';

import {
  IconBook,
  IconBrandGmail,
  IconBrandWhatsapp,
  IconHome,
  IconMenu2,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from './ShadCN/Sheet';
import ContactDialog from './ContactDialog';

export default function Header() {
  return (
    <header className='supports-backdrop-blur left-0 right-0 top-0 z-50 bg-card border-b border-primary py-4 backdrop-blur dark:bg-dark/75'>
      <div className='mx-auto flex max-w-4xl items-center justify-between px-3 xl:max-w-5xl xl:px-0'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <div className='animate-pulse'>
            <Image
              src='/static/images/logo.svg'
              alt='logo'
              width={50}
              height={50}
            />
          </div>
          <div className='group ml-2 text-xl font-bold transition duration-300'>
            Andi.dev
            <span className='block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-[85%] dark:bg-white'></span>
          </div>
        </Link>

        {/* Kontak */}
        <div className='hidden md:flex items-center text-base leading-5 gap-5 text-md'>
          <p className='flex items-center gap-1'>
            <IconBrandGmail stroke={1} className='text-red-500 size-6' />
            my.andimhmmad14@gmail.com
          </p>
          <p className='flex items-center gap-1'>
            <IconBrandWhatsapp stroke={1} className='text-green-500 size-6' />
            +62 821-5790-2445
          </p>
          <div className='max-w-md'>
            <ContactDialog />
          </div>
        </div>

        {/* Tombol Hamburger */}
        <Sheet>
          <SheetTrigger className='md:hidden p-2 rounded-lg bg-gray-200 dark:bg-blue-700'>
            <IconMenu2 size={24} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className='text-xl'>Feel free to contact me</SheetTitle>
              <SheetDescription>
                <div className='flex flex-col items-start gap-4 mt-2 divide-y divide-gray-700'>
                  {/* Kontak */}
                  <div className='flex flex-col items-start gap-2 pt-4 w-full'>
                    <p className='flex items-center gap-2 text-lg text-white'>
                      <IconBrandGmail stroke={1} className='text-red-500 size-6' />
                      my.andimhmmad14@gmail.com
                    </p>
                    <p className='flex items-center gap-2 text-lg text-white'>
                      <IconBrandWhatsapp stroke={1} className='text-green-500 size-6' />
                      +62 821-5790-2445
                    </p>
                    <div className='flex items-center justify-center w-full'>
                      <ContactDialog />
                    </div>
                  </div>

                  {/* Menu Navigasi */}
                  <div className='flex flex-col items-start gap-4 w-full '>
                    <Link
                      href='/'
                      className='text-lg text-white hover:text-sky-400 transition-colors duration-150 mt-4 flex items-center gap-2'
                    >
                      <IconHome stroke={1} className='text-blue-500 size-6' />
                      Homepage
                    </Link>
                    <Link
                      href='/documentation'
                      className='text-lg text-white hover:text-sky-400 transition-colors duration-150 flex items-center gap-2'
                    >
                      <IconBook stroke={1} className='text-green-500 size-6' />
                      Documentation
                    </Link>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}
