import { cn } from '@/lib/utils';
import clsx from 'clsx';

const Heading = () => {
  const className = clsx(
    'bg-gradient-to-r from-gray-500 to-slate-400 dark:bg-gradient-to-l dark:from-blue-400 dark:to-primary',
    'mb-6 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-4xl md:leading-[46px]'
  );

  return (
    <div className={cn(`animate-pulse mt-0 mb-10`, className)}>
      Hi There!{' '}
      <span className='font-bold'>
        Welcome to my world. <br></br> Discover my story of a relentless learning
        journey. 
      </span>
    </div>
  );
};

export default Heading;
