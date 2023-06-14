import { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../js';

import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils';
import { objectives } from '../constants';

const ObjectiveCard = ({ objective, index }) => {
  const [shadow, setShadow] = useState('');
  const [textColor, setTextColor] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (index % 2 === 0) {
      setShadow('shadow-[0px_0px_0px_4px_#BAE6FD,0px_3px_4px_0px_rgba(30,30,30,0.2),0px_3px_8px_2px_rgba(30,30,30,0.15)]');
      setTextColor('text-sky-500');
      setColor('#f0f9ff');
    } else {
      setShadow('shadow-[0px_0px_0px_4px_#A5f3FC,0px_3px_4px_0px_rgba(30,30,30,0.2),0px_3px_8px_2px_rgba(30,30,30,0.15)]');
      setTextColor('text-cyan-500');
      setColor('#ecfeff');
    }
  }, []);

  return (
    <VerticalTimelineElement
      contentStyle={{ backgroundColor: `${color}`, color: '#1e1e1e', boxShadow: 'none', WebkitBoxShadow: 'none' }}
      contentArrowStyle={{ borderRight: '7px solid #1e1e1e' }}
      date={objective.date}
      iconStyle={{ background: objective.iconBg, boxShadow: 'none', WebkitBoxShadow: 'none' }}
      icon={
        <div className={`flex h-full w-full items-center justify-center rounded-full ${shadow}`}>
          <img
            src={objective.icon}
            alt={objective.company_name}
            className='h-3/5 w-3/5 object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className={`${styles.groupSubText} ${textColor}`}>{objective.title}</h3>
        <p
          className='text-[16px] font-semibold text-black-200'
          style={{ margin: 0 }}
        >
          {objective.company_name}
        </p>
      </div>

      <ul className='ml-5 mt-5 list-disc space-y-2'>
        {objective.points.map((point, index) => (
          <li
            key={`objective-point-${index}`}
            className='p-1 text-[14px] tracking-wider text-black-300'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Objective = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Visi & Misi Kami</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor='#1e1e1e'>
          {objectives.map((objective, index) => (
            <ObjectiveCard
              key={index}
              index={index}
              objective={objective}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Objective, '');
