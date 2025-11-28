import React from 'react';
import vue from '/vue.png';
import laravel from '/laravel.png';
import react from '/react.png';
import tailwindcss from '/tailwindcss.png';
import CircularGallery from '../reactbits/CircularGallery';

const skillsData = [
  { image: vue, text: 'Vue.js' },
  { image: laravel, text: 'Laravel' },
  { image: react, text: 'React.js' },
  { image: tailwindcss, text: 'Tailwind CSS' },
];

export default function Skills() {
  return (
    <section id='skills' className='relative flex flex-col items-center justify-center min-h-screen px-4 py-10 overflow-hidden text-white'>
     
      <div className='absolute z-0 transform -translate-x-1/2 rounded-full opacity-50 bg-orange-950 w-72 h-36 sm:w-96 sm:h-44 blur-3xl top-10 sm:top-28 left-1/2'></div>
     

      <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 w-full space-y-6 text-center sm:space-y-10'>
        <header>
          <h1 className='text-3xl font-bold sm:text-4xl'>
            My Expertise<br />and <span className='text-orange-400'>Skills</span>
          </h1>
          <p className='max-w-2xl mx-auto mt-2 text-sm text-gray-400 sm:mt-4 sm:text-base'>
            I specialize in modern web technologies and frameworks, combining strong backend development with engaging frontend design. 
            My skill set spans full-stack development, UI/UX implementation, and responsive design practices. 
            I'm passionate about writing clean, efficient code and creating seamless digital experiences across all devices.
          </p>
        </header>

        <div style={{ height: '400px', position: 'relative' }}>
          <CircularGallery 
            items={skillsData} 
            bend={1} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.02} 
          />
        </div>
      </div>

     
    </section>
  );
}