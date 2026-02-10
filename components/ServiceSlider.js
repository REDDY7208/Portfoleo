import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { 
  RxRocket, 
  RxGear, 
  RxCode, 
  RxDashboard, 
  RxLightningBolt,
  RxArrowTopRight 
} from 'react-icons/rx';
import { FreeMode, Pagination } from 'swiper';

const serviceData = [
  {
    icon: <RxRocket />,
    title: 'CI/CD Pipeline Design',
    description: 'Automated build, test, and deployment pipelines using Jenkins, GitLab CI/CD, and GitHub Actions for seamless software delivery.',
  },
  {
    icon: <RxGear />,
    title: 'Infrastructure Automation',
    description: 'Infrastructure as Code (IaC) using Terraform and Ansible for scalable, reproducible cloud infrastructure deployment.',
  },
  {
    icon: <RxCode />,
    title: 'Container Orchestration',
    description: 'Docker containerization and Kubernetes orchestration for microservices architecture and scalable application deployment.',
  },
  {
    icon: <RxDashboard />,
    title: 'MLOps & AI Model Deployment',
    description: 'End-to-end ML pipeline automation with MLflow, model versioning, and production deployment of AI/ML models.',
  },
  {
    icon: <RxLightningBolt />,
    title: 'Cloud Architecture',
    description: 'Multi-cloud solutions on AWS, Azure, and GCP with focus on security, scalability, and cost optimization.',
  },
  {
    icon: <RxDashboard />,
    title: 'Monitoring & Observability',
    description: 'Comprehensive monitoring solutions using Prometheus, Grafana, and ELK stack for system health and performance tracking.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
