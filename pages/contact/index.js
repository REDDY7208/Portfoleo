import Circles from '../../components/Circles';
import Avatar from '../../components/Avatar';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='h-screen bg-black/90 relative overflow-hidden'>
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-[-100px] -left-[370px] z-0'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto py-8 sm:py-12 text-center xl:text-left flex items-center justify-center h-full relative z-10 px-4 sm:px-6'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] text-center mb-6 sm:mb-8 font-semibold leading-tight'
          >
            Let&apos;s <span className='text-accent'>collaborate.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-3 sm:gap-4 w-full mx-auto'
          >
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input w-full' />
              <input type='text' placeholder='email' className='input w-full' />
            </div>
            <input type='text' placeholder='subject' className='input' />
            <textarea placeholder='message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&apos;s talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
