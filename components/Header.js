import Link from 'next/link';
import Socials from './Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 h-[70px] sm:h-[80px] xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-y-3 sm:gap-y-4 lg:gap-y-6 py-4 sm:py-6 lg:py-8'>
          <Link href='/'>
            <div className='text-lg xs:text-xl sm:text-2xl font-bold text-white hover:text-accent transition-colors duration-300'>
              <span className='text-white'>Praveen Kumar</span>
              <span className='text-accent ml-1 sm:ml-2'>Reddy</span>
              <span className='text-white text-xs sm:text-sm ml-1 sm:ml-2 font-light'>.</span>
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
