import TechStack from './TechStack';

export default function Footer() {
  return (
    <footer>
      <div className='mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0'>
        <TechStack />

        <div className='my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>Andi Muhammad&apos;s - Relentless Learning Journey</span>
        </div>
      </div>
    </footer>
  );
}
