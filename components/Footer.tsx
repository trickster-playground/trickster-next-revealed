import TechStack from './TechStack';

export default function Footer() {
  return (
    <footer className='px-4 mx-4'>
      <div className='mb-8 mt-16 mx-auto max-w-4xl text-sm flex flex-col justify-center items-center md:flex-row md:items-center md:justify-center gap-4'>
        <TechStack />

        <div className='text-gray-500 dark:text-gray-400 text-center md:text-end'>
          <div>{`© ${new Date().getFullYear()} Andi Muhammad – Relentless Learning Journey`}</div>
        </div>
      </div>
    </footer>

  );
}
