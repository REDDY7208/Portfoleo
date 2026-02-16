import TestimonialSlider from '../../components/TestimonialSlider';
import Avatar from '../../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
    <div className='h-screen bg-black/90 py-8 sm:py-12 text-center relative overflow-hidden'>
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-[-100px] -left-[370px] z-0'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col justify-center relative z-10 px-4 sm:px-6'>
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] mb-4 sm:mb-6 xl:mb-0 font-semibold leading-tight'
        >
          What colleagues <span className='text-accent'>say.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
