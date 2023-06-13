import { useState } from 'react';
import { styles } from '../js/styles';
import { Link } from 'react-router-dom';

import { jsan } from '../assets';
import { navLinks, footerLinks, footerIcons } from '../constants';

const Footer = () => {
  const [active, setActive] = useState('');

  return (
    <footer
      className='relative mx-auto mt-20 w-full bg-blue-950 pt-3'
      id='contact'
    >
      <div className={`${styles.padding} mx-auto`}>
        <article className='flex flex-col pb-12'>
          <div>
            <Link
              to='/'
              className='flex items-center gap-2'
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <img
                src='/favicon.png'
                alt='logo'
                className='h-9 w-9 object-contain '
              />
              <img
                src={jsan}
                alt='jsan'
                className='h-9 w-9 object-contain '
              />
            </Link>
          </div>
          <div className='mt-3'>
            <h4 className={`${styles.sectionHeadText} w-full text-white`}>Sekolah Alam</h4>
            <h4 className={`${styles.sectionHeadText} w-full text-white`}>Boarding School</h4>
          </div>
          <ul className='mt-4 flex w-full list-none flex-wrap gap-4 max-xs:justify-between'>
            {navLinks.map((link, index) => (
              <Link
                to={`/${link.id}`}
                key={index}
                className='cursor-pointer text-[14px] font-medium text-white underline hover:text-white/75'
                onClick={() => setActive(link.title)}
              >
                {`${link.title}`}
              </Link>
            ))}
          </ul>
        </article>
        <div className='flex flex-wrap gap-y-8'>
          {footerLinks.map((link) => (
            <article
              className='flex w-full flex-col gap-y-[12px] xs:w-6/12 md:w-4/12'
              key={link.title}
            >
              <h5 className={`${styles.footerSubText}`}>{link.title}</h5>
              {link.contents.map((content) => (
                <a
                  className={`${styles.footerParagraph} hover:underline`}
                  key={content.text}
                  href={`${content.url}`}
                  target={content.url === '#' || '' ? '' : '_blank'}
                >
                  {content.text}
                </a>
              ))}
            </article>
          ))}
        </div>
        <div className={`mt-6 flex w-full flex-col justify-between`}>
          <hr className='w-full border-[.5px] border-[#BFDBFE]/30' />
          <div className='mt-6 flex items-center justify-between pb-3'>
            <div className='flex flex-col gap-1'>
              <p className={`${styles.footerParagraph}`}>Established at 2017.</p>
              <p className={`${styles.footerParagraph}`}>&#169; 2023 All right reserved.</p>
            </div>
            <ul className='flex gap-x-2'>
              {footerIcons.map((link) => (
                <li
                  key={link.title}
                  className='cursor-pointer'
                  onClick={() => setActive(link.title)}
                >
                  <a
                    href={`${link.url}`}
                    target='_blank'
                  >
                    <img
                      src={`${link.icon}`}
                      alt=''
                      height='18'
                      width='18'
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
