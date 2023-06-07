import { styles } from '../js/styles';

import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

const Documentation = () => {
  return (
    <section className="relative mx-auto mt-5 w-full">
      <div
        className="mx-auto mt-6 flex flex-col items-start"
      >
        <div className="mb-5">
          <h1 className={`${styles.heroHeadText} w-full`}>Dokumentasi Kami</h1>
        </div>

        <SwipeableTextMobileStepper />
      </div>
    </section>
  );
};

export default Documentation;
