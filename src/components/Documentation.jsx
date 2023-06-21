import { SectionWrapper } from '../hoc';
import { styles } from '../js/styles';
import Gallery from './Gallery';

const Documentation = () => {
  return (
    <>
      <div className='mt-24'>
        <div className='mt-4'>
          <h2 className={`${styles.sectionHeadText} mb-4 w-fit`}>Dokumentasi Kami</h2>
        </div>
        <Gallery />
      </div>
    </>
  );
};

export default SectionWrapper(Documentation, { idName: 'documentation' });
