import { styles } from '../js';

import { heroHeadings } from '../constants';
import { hero2 } from '../assets';

const Hero = () => {
  return (
    <section className={`relative mx-auto min-h-screen w-full overflow-clip`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[124px] z-10 mx-auto flex h-fit flex-col items-start xs:top-[120px]`}>
        <div className='mx-auto w-full text-center'>
          <h2 className={`${styles.heroHeadText} text-center `}>
            Sekolah Al-Izzah
            <br />{' '}
            <div className='relative h-[33px] overflow-clip xs:h-[42px] sm:h-[51px] md:h-[60px] lg:h-[72px] xl:h-[75px] 2xl:h-[84px]'>
              <div className='text-animate absolute flex w-full flex-col gap-y-3'>
                <span className={`${styles.heroHeadText} animate-line relative z-0 mx-auto w-fit`}>{heroHeadings[heroHeadings.length - 1]}</span>
                {heroHeadings.map((text) => (
                  <span
                    className={`${styles.heroHeadText} animate-line relative z-0 mx-auto w-fit `}
                    key={text}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </h2>
          <p className={`${styles.heroParagraphText} mx-auto mt-8 max-w-[348px] text-center italic sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl`}>Kami tunggu para petualang hebat di sekolah kami, together to be excellent!</p>
        </div>
        <div className='mx-auto mt-6 flex w-full flex-col items-center justify-center gap-3 text-[14px] font-bold xs:flex-row'>
          <a
            className='rounded-full border-2 border-sky-500 px-6 py-3 uppercase text-sky-500 hover:border-white hover:bg-white hover:text-sky-400'
            href='https://api.whatsapp.com/send?phone=628884936122'
          >
            Hubungi Kami
          </a>
          <a
            className='rounded-full border-2 border-sky-500 bg-sky-500 px-6 py-3 uppercase text-white hover:border-sky-400 hover:bg-sky-400'
            href='https://api.whatsapp.com/send?phone=628884936122&text=Assalamualaikum%20ustadz,%20mohon%20info%20PPDB%202023/2024%20'
          >
            Pendaftaran
          </a>
        </div>
      </div>
      <div className='absolute top-1/2 h-full w-full -translate-y-1/2 object-cover'>
        <img
          src={hero2}
          className='h-full w-full object-cover object-center'
        />
      </div>
    </section>
  );
};

export default Hero;
