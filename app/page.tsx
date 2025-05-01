import { Avatar } from '@/components/Avatar';
import Description from '@/components/Description';
import { Docks } from '@/components/Docks';
import Education from '@/components/Education';
import Exploring from '@/components/Exploring';
import Footer from '@/components/Footer';
import FullName from '@/components/FullName';
import Header from '@/components/Header';
import Heading from '@/components/Heading';
import RecentProject from '@/components/RecentProject';
import Tags from '@/components/Tags';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Andi Muhammad`s - Relentless Learning Journey',
    template: '%s | Andi Muhammad Learning Journey'
  },
  description: 'Andi Muhammad Fadhil Masyhun Arham Web Portfolio',
};

export default function Home() {
  return (
    <main className='w-full max-w-4xl'>
      <Header />
      <div className='mb-auto mt-6'>
        <div className='dark:divide-gray-700'>
          <Heading />
          <div className='flex flex-col items-center justify-between xl:flex-row gap-6 mb-4 '>
            <div className='w-1/2'>
              <Avatar />
            </div>
            <div className='my-auto flex flex-col text-lg  text-gray-600 dark:text-gray-400 max-w-xl'>
              <div className='flex justify-center items-center text-3xl font-extrabold  tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl  md:text-3xl mb-2'>
                About me
              </div>
              <FullName />
              <Description />
              <Docks />
            </div>
          </div>
        </div>
      </div>
      <Tags />
      <RecentProject />
      <Education />
      <Exploring />
      <Footer />
    </main>
  );
}
