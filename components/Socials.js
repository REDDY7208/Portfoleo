import Link from 'next/link';
import {
  RiLinkedinLine,
  RiGithubLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiTwitterLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link 
        href='http://www.linkedin.com/in/praveen-reddy-115158239' 
        target='_blank'
        className='hover:text-accent transition-all duration-300'
      >
        <RiLinkedinLine />
      </Link>
      <Link 
        href='https://github.com/praveenkumarreddy9866' 
        target='_blank'
        className='hover:text-accent transition-all duration-300'
      >
        <RiGithubLine />
      </Link>
      <Link 
        href='mailto:praveenkumarreddy9866@gmail.com' 
        className='hover:text-accent transition-all duration-300'
      >
        <RiMailLine />
      </Link>
      <Link 
        href='tel:+919866724766' 
        className='hover:text-accent transition-all duration-300'
      >
        <RiPhoneLine />
      </Link>
      <Link href='' className='hover:text-accent transition-all duration-300'>
        <RiTwitterLine />
      </Link>
      <div className='hover:text-accent transition-all duration-300 cursor-pointer'>
        <RiMapPinLine />
      </div>
    </div>
  );
};

export default Socials;
