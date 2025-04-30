import React from 'react';

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconMapPin,
  IconBrandWhatsapp,
  IconBrandLinkedin
} from '@tabler/icons-react';
import { FloatingDock } from './ActernityUI/FloatingDocks';

export function Docks() {
  const links = [
    {
      title: 'Location',
      icon: (
        <IconMapPin className='h-full w-full text-neutral-500 dark:text-neutral-300 ' />
      ),
      href: 'https://maps.app.goo.gl/GsXep64m1e97RM1E6'
    },
    {
      title: 'Whatsapp',
      icon: (
        <IconBrandWhatsapp className='h-full w-full text-neutral-500 dark:text-neutral-300 ' />
      ),
      href: 'https://wa.me/6282157902445?text=Hello,%20I%20would%20like%20to%20chat%20with%20you!'
    },
    {
      title: 'GitHub',
      icon: (
        <IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300 ' />
      ),
      href: 'https://github.com/trickster-playground'
    },
    {
      title: 'Linked In',
      icon: (
        <IconBrandLinkedin className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: 'https://www.linkedin.com/in/andi-muhammad14'
    },
    {
      title: 'Instagram',
      icon: (
        <IconBrandInstagram className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: 'https://www.instagram.com/andi.mhmmad'
    }
  ];
  return (
    <div className='flex items-center justify-center w-full mt-1'>
      <FloatingDock items={links} />
    </div>
  );
}
