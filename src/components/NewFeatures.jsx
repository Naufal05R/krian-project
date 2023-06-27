import { styles } from "../js";
import { HiColorSwatch } from "react-icons/hi";

const NewFeatures = ({ imgUrl, title, subtitle, index }) => {
  return (
    <div className="flex min-w-[210px] flex-1 flex-col sm:max-w-[250px]">
      <div
        className={`${styles.flexCenter} h-[64px] w-[64px] rounded-3xl p-2 ${
          index % 2 === 0 ? "bg-sky-200" : "bg-cyan-200"
        }`}
      >
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white shadow-icon">
          {/* <HiColorSwatch
            className="h-1/2 w-1/2 object-contain"
            color={`${index % 2 === 0 ? "#0ea5e9" : "#06b6d4"}`}
          /> */}
          <img
            src={imgUrl}
            className='h-1/2 w-1/2 object-contain'
            color={`${index % 2 === 0 ? "#0ea5e9" : "#06b6d4"}`}
            alt=""
          />
        </div>
      </div>
      <h1
        className={`mt-[26px] text-[24px] font-bold leading-[30px] ${
          index % 2 ? "text-cyan-500" : "text-sky-500"
        }`}
      >
        {title}
      </h1>
      <p className={`mt-4 flex-1 ${styles.groupParagraphText}`}>{subtitle}</p>
    </div>
  );
};

export default NewFeatures;
