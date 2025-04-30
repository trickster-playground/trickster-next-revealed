'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconBrandGmail,
  IconBrandWhatsapp,
  IconMenu2,
  IconX
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className='hidden md:flex items-center text-base leading-5 gap-5'>
          <p className='flex items-center gap-1'>
            <IconBrandGmail stroke={1} className='text-red-500 size-6' />
            my.andimhmmad14@gmail.com
          </p>
          <p className='flex items-center gap-1'>
            <IconBrandWhatsapp stroke={1} className='text-green-500 size-6' />
            +62 821 - 5790 - 2445
          </p>
        </div>

        {/* Tombol Hamburger */}
        <Sheet>
          <SheetTrigger className='md:hidden p-2 rounded-lg bg-gray-200 dark:bg-blue-700'>
            <IconMenu2 size={24} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Feel free to contact me</SheetTitle>
              <SheetDescription>
                <div className='flex flex-col items-start gap-4 mt-2'>
                  <p className='flex items-center gap-2 text-lg text-white'>
                    <IconBrandGmail
                      stroke={1}
                      className='text-red-500 size-6'
                    />
                    my.andimhmmad14@gmail.com
                  </p>
                  <p className='flex items-center gap-2 text-lg text-white'>
                    <IconBrandWhatsapp
                      stroke={1}
                      className='text-green-500 size-6'
                    />
                    +62 821 - 5790 - 2445
                  </p>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
