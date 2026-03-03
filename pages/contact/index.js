import Circles from '../../components/Circles';
import Avatar from '../../components/Avatar';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='h-screen bg-black/90 relative overflow-hidden'>
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-[-100px] -left-[370px] z-0'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto py-6 xs:py-8 sm:py-10 md:py-12 text-center xl:text-left flex items-center justify-center h-full relative z-10 px-3 xs:px-4 sm:px-6 md:px-8'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-[20px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[42px] text-center mb-4 xs:mb-5 sm:mb-6 md:mb-8 font-semibold leading-tight'
          >
            Let&apos;s <span className='text-accent'>collaborate.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-2.5 xs:gap-3 sm:gap-4 w-full mx-auto'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full'>
              <input 
                type='text' 
                name='name'
                placeholder='name' 
                className='input w-full' 
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input 
                type='email' 
                name='email'
                placeholder='email' 
                className='input w-full' 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input 
              type='text' 
              name='subject'
              placeholder='subject' 
              className='input' 
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea 
              name='message'
              placeholder='message' 
              className='textarea'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {status.message && (
              <div className={`p-2 xs:p-2.5 sm:p-3 rounded-lg text-xs xs:text-sm ${
                status.type === 'success' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/50'
              }`}>
                {status.message}
              </div>
            )}

            <button 
              type='submit'
              disabled={isSubmitting}
              className='btn rounded-full border border-white/50 max-w-[150px] xs:max-w-[160px] sm:max-w-[170px] px-6 xs:px-7 sm:px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto disabled:opacity-50 disabled:cursor-not-allowed text-sm xs:text-base'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                {isSubmitting ? 'Sending...' : 'Let\'s talk'}
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[18px] xs:text-[20px] sm:text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
