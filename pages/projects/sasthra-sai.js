import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Circles from '../../components/Circles';

const SasthraSAI = () => {
  const router = useRouter();

  return (
    <div className='h-screen bg-black/90 py-8 sm:py-12 text-center xl:text-left relative overflow-hidden'>
      <Circles />
      <div className='container mx-auto h-full flex flex-col justify-center relative z-10 px-4 sm:px-6'>
        <button
          onClick={() => router.push('/work')}
          className='absolute top-4 left-4 flex items-center gap-2 text-white/60 hover:text-accent transition-all duration-300'
        >
          <BsArrowLeft className='text-xl' />
          <span className='text-sm'>Back to Projects</span>
        </button>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-4xl mx-auto'
        >
          <h1 className='text-[32px] sm:text-[42px] md:text-[52px] font-bold mb-4'>
            Sasthra-<span className='text-accent'>SAI</span>
          </h1>
          <p className='text-lg text-white/80 mb-6'>AI-Powered Learning Assistant Platform</p>

          <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 mb-6'>
            <h2 className='text-2xl font-semibold mb-4 text-accent'>Project Overview</h2>
            <p className='text-white/70 mb-4 text-sm sm:text-base'>
              Sasthra-SAI is an intelligent learning assistant that leverages AI/ML to provide personalized 
              educational support. The platform uses natural language processing to understand student queries 
              and deliver contextual learning materials.
            </p>
          </div>

          <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'>
            <h2 className='text-2xl font-semibold mb-4 text-accent'>CI/CD Pipeline Architecture</h2>
            <div className='space-y-3 text-sm sm:text-base'>
              <div className='bg-white/5 p-4 rounded border border-white/10'>
                <h3 className='font-semibold text-white mb-2'>🔄 Continuous Integration</h3>
                <ul className='text-white/70 space-y-1 text-xs sm:text-sm'>
                  <li>• Jenkins pipeline with automated code quality checks</li>
                  <li>• Unit and integration testing with 95% code coverage</li>
                  <li>• Docker image building and vulnerability scanning</li>
                  <li>• Automated dependency updates and security patches</li>
                </ul>
              </div>

              <div className='bg-white/5 p-4 rounded border border-white/10'>
                <h3 className='font-semibold text-white mb-2'>🚀 Continuous Deployment</h3>
                <ul className='text-white/70 space-y-1 text-xs sm:text-sm'>
                  <li>• Kubernetes cluster deployment with Helm charts</li>
                  <li>• Blue-green deployment strategy for zero downtime</li>
                  <li>• Automated rollback on deployment failures</li>
                  <li>• Multi-environment deployment (Dev, Staging, Production)</li>
                </ul>
              </div>

              <div className='bg-white/5 p-4 rounded border border-white/10'>
                <h3 className='font-semibold text-white mb-2'>📊 Monitoring & Observability</h3>
                <ul className='text-white/70 space-y-1 text-xs sm:text-sm'>
                  <li>• Prometheus metrics collection and Grafana dashboards</li>
                  <li>• ELK stack for centralized logging</li>
                  <li>• Real-time alerting with PagerDuty integration</li>
                  <li>• Performance monitoring and APM with New Relic</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SasthraSAI;
