import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

import { styles } from '../js';

import { heroHeadings } from '../constants';

const Hero = () => {
  return (
    <section className='relative mx-auto h-screen w-full bg-[]'>
      <div className={`${styles.paddingX} absolute inset-0 top-[84px] mx-auto flex flex-col items-start xs:top-[120px]`}>
        <div className='mx-auto w-full text-center'>
          <h2 className={`${styles.heroHeadText} text-center`}>
            Sekolah Al-Izzah
            <br />{' '}
            <div className='xl relative h-[33px] overflow-clip xs:h-[42px] sm:h-[51px] md:h-[60px] lg:h-[72px] xl:h-[75px] 2xl:h-[84px]'>
              <div className='text-animate absolute flex w-full flex-col gap-y-3'>
                <span className={`${styles.heroHeadText} animate-line relative z-0 mx-auto w-fit`}>{heroHeadings[heroHeadings.length - 1]}</span>
                {heroHeadings.map((text) => (
                  <span
                    className={`${styles.heroHeadText} animate-line relative z-0 mx-auto w-fit`}
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
          <Button
            variant='outlined'
            disableElevation
            href='https://api.whatsapp.com/send?phone=628884936122'
          >
            Hubungi Kami
          </Button>
          <Button
            variant='contained'
            disableElevation
            href='https://api.whatsapp.com/send?phone=628884936122&text=Assalamualaikum%20ustadz,%20mohon%20info%20PPDB%202023/2024%20'
          >
            Pendaftaran
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
