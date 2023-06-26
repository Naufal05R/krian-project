import React, { useState } from 'react';
import { Navbar, DetailNews } from '../components';
import { detailNewsList } from '../constants';
import { getItem } from '../utils';
import { useParams } from 'react-router';

const DetailNewsPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(getItem(detailNewsList, id));

  return (
    <>
      <div className='blue-gradient bg-cover bg-center bg-no-repeat text-black-200'>
        <Navbar className='text-black-200' />
      </div>

      <DetailNews
        id={news.id}
        key={news.id}
        {...news}
      />
    </>
  );
};

export default DetailNewsPage;
