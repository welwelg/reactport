import React from 'react';

export default function Footer() {
  return (
    <footer className='py-5 text-white bg-gradient-to-r from-purple-700 to-blue-700'>
      <div className='container flex flex-col items-center justify-between mx-auto md:flex-row'>
        <h1 className='mb-4 text-3xl italic font-bold md:mb-0'>Portfolio</h1>
        <p className='text-sm text-center md:text-left'>
          © 2024 My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
