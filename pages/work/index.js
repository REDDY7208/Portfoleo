import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import Avatar from '../../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className='h-screen bg-black/90 py-8 sm:py-12 flex items-center relative overflow-hidden'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-[-100px] -left-[370px] z-0'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto relative z-10 px-4 sm:px-6'>
        <div className='flex flex-col xl:flex-row gap-x-8 gap-y-4'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-2 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:mt-4 mb-3 font-semibold leading-tight'
            >
              My projects <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-3 max-w-[400px] mx-auto lg:mx-0 text-xs sm:text-sm'
            >
              Showcasing successful DevOps implementations, MLOps pipelines, 
              and AI/ML platform deployments across various industries and 
              use cases.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
