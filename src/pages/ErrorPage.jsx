import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';

function ErrorPage() {
  return (
    <section className='bg-base-200 grid min-h-screen place-items-center bg-cover bg-center'>
      <div className='flex items-center justify-center text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>404</h1>
          <h4 className='text-xl font-medium'>Halaman tidak ditemukan</h4>
          <p className='py-6'>Maaf, halaman yang Anda cari tidak dapat ditemukan. Mohon periksa kembali alamat url anda</p>
          <div className='mx-auto flex w-fit space-x-4'>
            <Link
              to='/'
              className='inline-flex justify-center font-bold items-center rounded-full border-2 border-sky-500 bg-sky-500 pl-4 pr-6 py-3 uppercase text-white hover:border-sky-400 hover:bg-sky-400 gap-2'
            >
              <TiArrowBackOutline />
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
