import { useState } from 'react';
import {
  SiJenkins,
  SiGitlab,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiNginx,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiMlflow,
  SiTensorflow,
  SiPytorch,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiLinux,
} from 'react-icons/si';
import {
  FaFlask,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'DevOps & Cloud',
        icons: [
          <SiJenkins key='jenkins' />,
          <SiGitlab key='gitlab' />,
          <SiDocker key='docker' />,
          <SiKubernetes key='k8s' />,
          <SiTerraform key='terraform' />,
          <SiAnsible key='ansible' />,
          <SiPrometheus key='prometheus' />,
          <SiGrafana key='grafana' />,
          <SiNginx key='nginx' />,
          <SiAmazonaws key='aws' />,
          <SiMicrosoftazure key='azure' />,
          <SiGooglecloud key='gcp' />,
        ],
      },
      {
        title: 'MLOps & AI/ML',
        icons: [
          <SiMlflow key='mlflow' />,
          <SiTensorflow key='tf' />,
          <SiPytorch key='pytorch' />,
          <SiPython key='python' />,
        ],
      },
      {
        title: 'Backend & Databases',
        icons: [
          <FaFlask key='flask' />,
          <SiMysql key='mysql' />,
          <SiPostgresql key='postgres' />,
          <SiMongodb key='mongo' />,
          <SiRedis key='redis' />,
        ],
      },
      {
        title: 'Version Control & OS',
        icons: [
          <FaGitAlt key='git' />,
          <FaGithub key='github' />,
          <SiGitlab key='gitlab2' />,
          <SiLinux key='linux' />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'DevOps Team Lead - DSAIS (Data Spark AI Solutions)',
        stage: 'December 2024 - Present',
      },
      {
        title: 'DevOps & Backend Developer - DSAIS (Data Spark AI Solutions)',
        stage: 'September 2024 - December 2024',
      },
      {
        title: 'AI & Data Engineering Intern - DSAIS (Data Spark AI Solutions)',
        stage: 'June 2024 - August 2024',
      },
      {
        title: 'Data Scientist Intern - Rubixe (Bangalore)',
        stage: 'June 2023 - January 2024',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'B.Tech - Electronics & Communication Engineering',
        stage: 'Hindustan Institute of Technology (2019-2023) | 8.4 CGPA',
      },
      {
        title: 'Intermediate - Sri Chaitanya Junior College',
        stage: '2017-2019 | 9.5 CGPA',
      },
      {
        title: 'SSC - Cauvery Eden High School',
        stage: '2017 | 9.0 CGPA',
      },
    ],
  },
  {
    title: 'certifications',
    info: [
      {
        title: 'AWS Certified Solutions Architect',
        stage: 'Amazon Web Services',
      },
      {
        title: 'Kubernetes Administrator (CKA)',
        stage: 'Cloud Native Computing Foundation',
      },
      {
        title: 'Docker Certified Associate',
        stage: 'Docker Inc.',
      },
      {
        title: 'MLOps Specialization',
        stage: 'Coursera - DeepLearning.AI',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-black/90 py-16 sm:py-24 md:py-32 text-center xl:text-left relative overflow-y-auto'>
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
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 gap-y-8 relative z-10 px-4 sm:px-6'>
        {/* Left Side - Clean and Simple */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex-1 flex flex-col justify-center w-full'
        >
          <h2 className='text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-tight mb-4 font-semibold px-4 sm:px-0'>
            Automating <span className='text-accent'>AI/ML</span> deployments
            with DevOps excellence.
          </h2>
          <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 sm:mb-8 px-4 sm:px-2 xl:px-0 text-white/80 text-xs sm:text-sm md:text-base'>
            DevOps Engineer with 2+ years in AI/ML deployment and MLOps automation. 
            Expert in CI/CD pipelines, Kubernetes microservices, and cloud infrastructure.
          </p>
          
          {/* Stats Counter */}
          <div className='grid grid-cols-2 gap-3 sm:gap-4 max-w-[500px] mx-auto xl:mx-0 px-4 sm:px-0'>
            <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10'>
              <div className='text-2xl sm:text-3xl xl:text-4xl font-extrabold text-accent mb-1'>
                <CountUp start={0} end={2} duration={5} /> +
              </div>
              <div className='text-[9px] sm:text-[10px] xl:text-xs uppercase tracking-wider text-white/60'>
                Years of Experience
              </div>
            </div>
            <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10'>
              <div className='text-2xl sm:text-3xl xl:text-4xl font-extrabold text-accent mb-1'>
                <CountUp start={0} end={8} duration={5} /> +
              </div>
              <div className='text-[9px] sm:text-[10px] xl:text-xs uppercase tracking-wider text-white/60'>
                Total Projects
              </div>
            </div>
            <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10'>
              <div className='text-2xl sm:text-3xl xl:text-4xl font-extrabold text-accent mb-1'>
                <CountUp start={0} end={300} duration={5} /> +
              </div>
              <div className='text-[9px] sm:text-[10px] xl:text-xs uppercase tracking-wider text-white/60'>
                CI/CD Pipelines
              </div>
            </div>
            <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10'>
              <div className='text-2xl sm:text-3xl xl:text-4xl font-extrabold text-accent mb-1'>
                <CountUp start={0} end={4} duration={5} /> +
              </div>
              <div className='text-[9px] sm:text-[10px] xl:text-xs uppercase tracking-wider text-white/60'>
                Cloud Platforms
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Neat Data Display */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] px-4 sm:px-0'
        >
          {/* Tab Navigation */}
          <div className='flex gap-x-3 sm:gap-x-4 xl:gap-x-6 mx-auto xl:mx-0 mb-4 sm:mb-6 flex-wrap justify-center xl:justify-start'>
            {aboutData.map((item, itemIndex) => (
              <button
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? 'text-accent after:w-full after:bg-accent'
                    : 'text-white/60 hover:text-white/80'
                } cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative after:w-0 after:h-[2px] after:bg-white/20 after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 py-2`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className='bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10 min-h-[300px] sm:min-h-[400px] max-h-[400px] sm:max-h-[500px] overflow-y-auto'>
            <div className='flex flex-col gap-y-3 sm:gap-y-4'>
              {aboutData[index].info.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className='bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10 hover:border-accent/50 transition-all duration-300'
                >
                  <div className='font-semibold text-white mb-2 text-sm sm:text-base'>{item.title}</div>
                  {item.stage && (
                    <div className='text-xs sm:text-sm text-white/60 mb-3'>{item.stage}</div>
                  )}
                  {item.icons && (
                    <div className='flex flex-wrap gap-2 sm:gap-3 mt-3'>
                      {item.icons.map((icon, iconIndex) => (
                        <div
                          key={iconIndex}
                          className='text-xl sm:text-2xl text-white/80 hover:text-accent hover:scale-110 transition-all duration-300'
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
