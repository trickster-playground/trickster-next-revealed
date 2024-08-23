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
  title: 'Home | Andi Muhammad Portfolio'
};

export default function Home() {
  return (
    <main className='w-full max-w-7xl'>
      <Header />
      <div className='mb-auto mt-6'>
        <div className='dark:divide-gray-700'>
          <Heading />
          <div className='flex flex-col items-center justify-between  xl:flex-row gap-6'>
            <div>
              <Avatar />
            </div>
            <div className='my-auto flex flex-col text-lg  text-gray-600 dark:text-gray-400'>
              <div className='flex justify-center items-center text-3xl font-extrabold  tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl  md:text-3xl '>
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
