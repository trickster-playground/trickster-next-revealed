import React from 'react';
import { PinContainer } from './ActernityUI/PinCard';
import { projects } from '@/constant';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';

const Exploring = () => {
  return (
    <div className='w-full max-w-4xl'>
      <div className='space-y-2 py-6 md:space-y-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
          Explore
        </h1>
        <p className='!mt-2 text-lg leading-7 text-blue-500'>
          These are the latest web based i learn based on tutorials from YouTube
          to expand my knowledge about using the most popular technologies in
          web development.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {projects.map(item => (
          <div
            className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
            key={item.id}
          >
            <PinContainer title={item.title} href={item.repository} >
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                <div
                  className='relative w-full h-full overflow-hidden lg:rounded-3xl'
                  style={{ backgroundColor: '#13162D' }}
                >
                  <Image width={1000} height={1000} src='/static/images/bg.png' alt='background-image' className='' />
                </div>
                <Image
                  src={item.img}
                  width={1000}
                  height={1000}
                  alt='cover'
                  className='z-10 absolute object-cover h-fit w-fit'
                />
              </div>

              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {item.title}
              </h1>

              <p
                className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0'
                }}
              >
                {item.des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`
                      }}
                    >
                      <img src={icon} alt='icon5' className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <p className='flex text-sm text-primary mr-2'>
                    Check Repository
                  </p>
                  <IconArrowRight stroke={1} />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exploring;
