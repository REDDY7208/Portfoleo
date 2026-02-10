import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Rajesh Kumar',
    position: 'CTO, DSAIS',
    message:
      'Praveen has been instrumental in transforming our AI/ML deployment processes. His expertise in MLOps and Kubernetes orchestration has significantly improved our model deployment efficiency and system reliability.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Sarah Johnson',
    position: 'Product Manager, EdTech Startup',
    message:
      'Working with Praveen on our IELTS platform was exceptional. His DevOps skills and attention to security protocols ensured our platform could scale seamlessly while maintaining high performance standards.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Dr. Amit Sharma',
    position: 'Lead Data Scientist',
    message:
      'Praveen\'s ability to bridge the gap between data science and production deployment is remarkable. His MLOps pipelines have streamlined our model lifecycle management and reduced deployment time by 70%.',
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
