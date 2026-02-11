import TestimonialSlider from '../../components/TestimonialSlider';
import Avatar from '../../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
    <div className='h-full bg-black/90 py-20 sm:py-28 md:py-32 text-center relative overflow-y-auto'>
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
          className='text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] mb-6 sm:mb-8 xl:mb-0 font-semibold leading-tight'
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
