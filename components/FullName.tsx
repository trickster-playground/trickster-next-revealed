'use client';

import { TypewriterEffectSmooth } from './ActernityUI/Typewritter-effect';

export default function FullName() {
  const words = [
    {
      text: 'Andi'
    },
    {
      text: 'Muhammad'
    },
    {
      text: 'Fadhil'
    },
    {
      text: 'Masyhun'
    },
    {
      text: 'Arham.',
      className: 'text-blue-500 dark:text-blue-500'
    }
  ];
  return (
    <div className=''>
      <span className='text-white/80'>My name is : </span> <TypewriterEffectSmooth words={words} />
    </div>
  );
}
