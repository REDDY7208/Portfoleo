import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Circles from '../../components/Circles';

const SashtraEducation = () => {
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
            Sasthra-<span className='text-accent'>Education</span>
          </h1>
          <p className='text-lg text-white/80 mb-6'>Comprehensive Learning Management System</p>

          <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 mb-6'>
            <h2 className='text-2xl font-semibold mb-4 text-accent'>Project Overview</h2>
            <p className='text-white/70 mb-4 text-sm sm:text-base'>
              Sasthra-Education is a full-featured learning management system that combines traditional 
              education with AI-powered personalization. The platform supports video streaming, interactive 
              assessments, live classes, and adaptive learning paths for students.
            </p>
          </div>

          <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'>
            <h2 className='text-2xl font-semibold mb-4 text-accent'>CI/CD Pipeline Architecture</h2>
            <div className='space-y-3 text-sm sm:text-base'>
              <div className='bg-white/5 p-4 rounded border border-white/10'>
                <h3 className='font-semibold text-white mb-2'>🔄 Continuous Integration</h3>
                <ul className='text-white/70 space-y-1 text-xs sm:text-sm'>
                  <li>• GitHub Actions with matrix testing across environments</li>
                  <li>• Automated E2E testing with Cypress and Selenium</li>
                  <li>• ML model validation and performance benchmarking</li>
                  <li>• Security scanning with Snyk and Trivy</li>
                </ul>
              </div>

              <div className='bg-white/5 p-4 rounded border border-white/10'>
                <h3 className='font-semibold text-white mb-2'>🚀 Continuous Deployment</h3>
                <ul className='text-white/70 space-y-1 text-xs sm:text-sm'>
                  <li>• Kubernetes with Horizontal Pod Autoscaling (HPA)</li>
                  <li>• MLOps pipeline with MLflow and Kubeflow</li>
                  <li>• A/B testing framework for feature rollouts</li>
                  <li>• CDN integration for global content delivery</li>
                </ul>
              </div>

              <div className='bg-white/5 p-4 rounded border border-white/10'>
                <h3 className='font-semibold text-white mb-2'>📊 Monitoring & Observability</h3>
                <ul className='text-white/70 space-y-1 text-xs sm:text-sm'>
                  <li>• Full observability stack (Prometheus, Grafana, Loki)</li>
                  <li>• ML model monitoring with Evidently AI</li>
                  <li>• User analytics with custom event tracking</li>
                  <li>• Cost optimization monitoring across cloud resources</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SashtraEducation;
