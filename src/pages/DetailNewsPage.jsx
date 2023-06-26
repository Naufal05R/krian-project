import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, DetailNews, Blogs, Highlight, Shared } from '../components';
import { detailNewsList } from '../constants';
import { getItem, staggerContainer } from '../utils';
import { styles } from '../js';
import { useParams } from 'react-router';
import ErrorPage from './ErrorPage';

const DetailNewsPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(getItem(detailNewsList, id));

  useEffect(() => {
    (async () => {
      setNews(getItem(detailNewsList, id));
    })();
  }, [id]);

  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.1 }}
      className='relative'
    >
      <div className='blue-gradient bg-cover bg-center bg-no-repeat text-black-200'>
        <Navbar className='text-black-200' absoluteBg={false} />
      </div>

      {news ? (
        <DetailNews
          id={news.id}
          key={news.id}
          {...news}
        />
      ) : (
        <ErrorPage />
      )}
      <Blogs />
      <Highlight />
      <Shared />
    </motion.div>
  );
};

export default DetailNewsPage;
