import { styles } from '../styles';
import PropTypes from 'prop-types';

const LightCard = ({ cardTitle, cardText }) => {
  return (
    <article className="relative grid h-80 place-items-end overflow-hidden rounded-3xl border-none shadow-card-xs">
      <div className="absolute left-0 right-0 top-0 flex h-[55%] w-full justify-center bg-card-placeholder bg-cover" />
      <div className="mb-[33px] px-6">
        <h5 className={`${styles.sectionSubText} text-center`}>
          {cardTitle || `Kegiatan Kami`}
        </h5>
        <p className={`${styles.sectionParagraphText} mt-[9px] text-center`}>
          {cardText || `Lorem ipsum dolor sit amet consectetur. Id justo tellus sed massa.
          Ullamcorper mauris egestas facilisis nulla lectus in.`}
        </p>
      </div>
    </article>
  );
};

LightCard.propTypes = {
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
}

export default LightCard;
