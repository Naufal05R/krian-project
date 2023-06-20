import { motion } from 'framer-motion';

import { styles } from '../js';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

import { testimonials } from '../constants';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5 + 1, 0.75)}
      className={`w-full rounded-3xl bg-blue-50 p-10 shadow-sm xs:w-full md:w-[80%] lg:w-[360px]`}
    >
      <p className='text-[48px] font-black text-black-200'>"</p>

      <div className='mt-1'>
        <p className='text-[18px] tracking-wider text-black-200'>{testimonial}</p>

        <div className='mt-7 flex items-center justify-between gap-1'>
          <div className='flex flex-1 flex-col'>
            <p className='text-[16px] font-medium text-black-200'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-[12px] text-black-300'>
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback-by-${name}`}
            className='h-10 w-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className='mt-12 w-full rounded-[20px]'>
      <div className={`rounded-2xl`}>
        <motion.div variants={textVariant(0.25)}>
          <h2 className={`${styles.sectionHeadText} w-fit`}>Testmonial Santri</h2>
        </motion.div>
      </div>

      <motion.div className={`mt-20 flex flex-wrap gap-4 pb-14`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={index}
            index={index}
            {...testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, { idName: '' });
