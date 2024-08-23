'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from './ActernityUI/3DCard';
import Link from 'next/link';

export function Avatar() {
  return (
    <CardContainer className='inter-var'>
      <CardItem translateZ='100' className='w-full'>
        <Image
          src='/static/images/Avatar.jpeg'
          height={1000}
          width={1000}
          className='size-60 w-full object-cover aspect-square rounded-md group-hover/card:shadow-xl'
          alt='thumbnail'
        />
      </CardItem>
    </CardContainer>
  );
}
