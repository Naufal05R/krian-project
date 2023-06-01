import { styles } from "../styles";

import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

const Documentation = () => {
  return (
    <section className="relative mx-auto mt-5 w-full">
      <div
        className={`${styles.paddingX} mx-auto mt-6 flex max-w-7xl flex-col items-start`}
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
