import Link from 'next/link';
import Socials from './Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          <Link href='/'>
            <div className='text-2xl font-bold text-white hover:text-accent transition-colors duration-300'>
              <span className='text-white'>Praveen Kumar</span>
              <span className='text-accent ml-2'>Reddy</span>
              <span className='text-white text-sm ml-2 font-light'>.</span>
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
