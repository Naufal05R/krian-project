import { styles } from '../js';

const StartSteps = ({ number, text }) => (
  <div className={`flex flex-row items-center justify-center`}>
    <div className={`flex h-[64px] w-[64px] items-center justify-center rounded-3xl p-2 ${number % 2 === 0 ? 'bg-sky-200' : 'bg-cyan-200'}`}>
      <div className='flex h-full w-full items-center justify-center rounded-2xl bg-white shadow-icon'>
        <p className={`text-[20px] font-bold ${number % 2 === 0 ? 'text-sky-500' : 'text-cyan-500'}`}>0{number}</p>
      </div>
    </div>
    <p className={`${styles.groupParagraphText} ml-[30px] flex-1`}>{text}</p>
  </div>
);

export default StartSteps;
