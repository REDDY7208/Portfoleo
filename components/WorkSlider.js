import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'IELTSGenAI Platform',
          path: '/thumb1.jpg',
          description: 'AI-powered IELTS preparation platform with microservices architecture',
        },
        {
          title: 'Interviu.in',
          path: '/thumb2.jpg',
          description: 'AI-driven interview preparation platform with CI/CD automation',
        },
        {
          title: 'School-of-Sasthra',
          path: '/thumb3.jpg',
          description: 'AI-Tutor platform with Kubernetes orchestration',
        },
        {
          title: 'Sasthra NEET/JEE',
          path: '/thumb4.jpg',
          description: 'Educational platform with MLOps workflows and monitoring',
        },
      ],
    },
    {
      images: [
        {
          title: 'House Price Prediction',
          path: '/thumb4.jpg',
          description: 'MLOps project with 92% accuracy and Kubernetes deployment',
        },
        {
          title: 'Cellphone Price Prediction',
          path: '/thumb1.jpg',
          description: 'ML model with Docker containerization and FastAPI service',
        },
        {
          title: 'Real-time Data Streaming',
          path: '/thumb2.jpg',
          description: 'Apache Kafka implementation for event-driven systems',
        },
        {
          title: 'Multi-Cloud Infrastructure',
          path: '/thumb3.jpg',
          description: 'Terraform-based infrastructure across AWS, Azure, and GCP',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-100'>VIEW</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'>
                      <h3 className='text-white font-semibold text-sm mb-1'>{image.title}</h3>
                      <p className='text-white/80 text-xs'>{image.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
