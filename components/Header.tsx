import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  return (
    <header className='supports-backdrop-blur left-0 right-0 top-0 z-50 bg-card border-b border-primary py-4 backdrop-blur dark:bg-dark/75'>
      <div className='mx-auto flex max-w-4xl items-center justify-between px-3 xl:max-w-5xl xl:px-0'>
        <Link href='/' className='flex items-center'>
          <div className='animate-pulse'>
            <Image
              src={'/static/images/logo.svg'}
              alt='logo'
              width={50}
              height={50}
            />
          </div>
          <div className='group ml-2 text-xl font-bold transition duration-300'>
            Andi.dev
            <span className='block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-[85%] dark:bg-white'></span>
          </div>
        </Link>
        <div className='flex items-center text-base leading-5 gap-5'>
          <div className='hidden sm:block'>
            <p>Email: my.andimhmmad14@gmail.com </p>
          </div>
          <div className='hidden sm:block'>
            <p>Phone: +62 821-5790-2445 </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
