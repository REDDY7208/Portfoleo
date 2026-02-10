import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src='/avatar.png.png'
        width={737}
        height={678}
        alt='Praveen Kumar Reddy'
        className='translate-z-0 w-full h-full'
        priority
        quality={75}
      />
    </div>
  );
};

export default Avatar;
