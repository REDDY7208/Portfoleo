import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-screen overflow-hidden'>

      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center pt-20 xs:pt-24 sm:pt-32 md:pt-36 xl:pt-40 xl:text-left h-full container mx-auto px-3 xs:px-4 sm:px-6 md:px-8'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 text-[26px] xs:text-[30px] sm:text-[36px] md:text-[44px] lg:text-[54px] xl:text-[60px] leading-tight'
          >
            Praveen Kumar Reddy <br /> 
            <span className='text-accent'>DevOps Engineer</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[90%] xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl mx-auto xl:mx-0 mb-6 sm:mb-8 md:mb-10 xl:mb-16 text-xs xs:text-sm sm:text-base px-2 xs:px-4 sm:px-0'
          >
            AI/ML Specialization • 2+ Years Experience in MLOps automation, 
            cloud-native infrastructure, and CI/CD pipelines. Expert in Kubernetes, 
            Docker, Terraform, and AI model deployment.
          </motion.p>
          <div className='flex justify-center xl:hidden relative z-10'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className='w-full xl:w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='hidden xs:block w-full h-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[737px] max-h-[280px] xs:max-h-[320px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[678px] absolute bottom-0 xs:-bottom-10 sm:-bottom-20 md:-bottom-32 lg:bottom-0 right-0 xs:right-[2%] sm:right-[5%] lg:right-[8%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
