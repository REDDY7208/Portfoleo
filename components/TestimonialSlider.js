import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Thilaga',
    position: 'Senior DevOps Engineer',
    message:
      'Praveen\'s expertise in CI/CD pipelines and infrastructure automation is outstanding. His ability to optimize deployment workflows and implement robust monitoring solutions has greatly enhanced our team\'s productivity.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Hemanth',
    position: 'DevOps Lead',
    message:
      'Working with Praveen has been a great experience. His deep knowledge of Kubernetes, Docker, and cloud infrastructure helped us achieve seamless container orchestration and improved our system scalability significantly.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Janardhan',
    position: 'Cloud Architect',
    message:
      'Praveen\'s proficiency in Terraform and cloud-native technologies is impressive. He designed and implemented our entire infrastructure as code, making our deployments more reliable and maintainable.',
  },
  {
    image: '/t-avt-1.png',
    name: 'Kavaya',
    position: 'DevOps Engineer',
    message:
      'Praveen is an excellent team player with strong technical skills in automation and DevOps practices. His contributions to our CI/CD pipeline optimization reduced deployment time by 60% and improved overall system reliability.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Madhu',
    position: 'Site Reliability Engineer',
    message:
      'Praveen\'s approach to monitoring and observability is exceptional. He implemented comprehensive logging and alerting systems that have significantly improved our incident response time and system uptime.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Kalavathing',
    position: 'DevOps Consultant',
    message:
      'Praveen demonstrates excellent problem-solving skills and deep understanding of DevOps principles. His work on automating infrastructure provisioning and implementing security best practices has been invaluable to our projects.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  <div className='text-lg'>{person.name}</div>
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
