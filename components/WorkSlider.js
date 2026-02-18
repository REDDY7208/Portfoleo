import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { useRouter } from 'next/router';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Sasthra-SAI',
          path: '/thumb1.jpg',
          description: 'AI-powered learning assistant with automated CI/CD pipeline and Kubernetes deployment',
          link: '/projects/sasthra-sai',
        },
        {
          title: 'Sasthra-SOS',
          path: '/thumb2.jpg',
          description: 'Emergency support system with Jenkins CI/CD, Docker containerization, and real-time monitoring',
          link: '/projects/sasthra-sos',
        },
        {
          title: 'Sasthra-Guidance',
          path: '/thumb3.jpg',
          description: 'Career guidance platform with GitLab CI/CD, microservices architecture, and cloud deployment',
          link: '/projects/sasthra-guidance',
        },
        {
          title: 'Sasthra-Education',
          path: '/thumb4.jpg',
          description: 'Comprehensive education platform with automated testing, MLOps pipelines, and scalable infrastructure',
          link: '/projects/sasthra-education',
        },
      ],
    },
    {
      images: [
        {
          title: 'IELTSGenAI Platform',
          path: '/thumb1.jpg',
          description: 'AI-powered IELTS preparation with microservices and automated deployment',
        },
        {
          title: 'Interviu.in',
          path: '/thumb2.jpg',
          description: 'AI-driven interview platform with CI/CD automation and monitoring',
        },
        {
          title: 'House Price Prediction',
          path: '/thumb3.jpg',
          description: 'MLOps project with 92% accuracy and Kubernetes deployment',
        },
        {
          title: 'Multi-Cloud Infrastructure',
          path: '/thumb4.jpg',
          description: 'Terraform-based infrastructure across AWS, Azure, and GCP',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const router = useRouter();

  const handleProjectClick = (link) => {
    if (link) {
      router.push(link);
    }
  };

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
                    onClick={() => handleProjectClick(image.link)}
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
