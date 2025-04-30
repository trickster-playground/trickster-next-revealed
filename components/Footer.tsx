import TechStack from './TechStack';

export default function Footer() {
  return (
    <footer className=''>
      <div className='mb-8 mt-16 flex items-center justify-between  mx-auto md:mb-10 md:flex md:space-y-0 max-w-4xl text-sm'>
        <TechStack />

        <div className='my-2 flex space-x-2  text-gray-500 dark:text-gray-400'>
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>Andi Muhammad&apos;s - Relentless Learning Journey</span>
        </div>
      </div>
    </footer>
  );
}
