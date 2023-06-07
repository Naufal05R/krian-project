/* eslint-disable react-refresh/only-export-components */
import { styles } from '../js/styles';

import { SectionWrapper } from "../hoc";
import SwiperAlbum from "./swiperAlbum";

const Activity = () => {
  return (
    <div className="relative mx-auto w-full">
      <div
        className="mx-auto mt-4 flex flex-col items-start"
      >
        <div className="mb-5">
          <h1 className={`${styles.sectionHeadText} w-full`}>Kegiatan Kami</h1>
        </div>

        <SwiperAlbum />
      </div>
    </div>
  );
};

export default SectionWrapper(Activity, "activity");
