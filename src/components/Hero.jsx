import React from 'react';
import Navbar from './Navbar';
import imghero from '/imghero.png';
import github from  '/github.png';
import linkedin from '/linkedin.png';
import facebook from '/facebook.png';
import instagram from '/instagram.png';
import Adam from '/Adam.pdf';


export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'>
      <div className='md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl'>

      </div>

      <Navbar/>
      <main id="home" className="z-10 flex flex-col items-center justify-center w-full px-4 pt-24 pb-4 md:flex-row md:px-52 md:pb-24 md:pt-32 mt-14 md:mt-0">
        <section className='relative flex-1 mt-10 mr-28 md:text-left md:mt-0'
        data-aos='fade-up'
        data-aos-delay='500'
        >
          <div className='absolute -z-10 w-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12'></div>
          <header>
            <h1 className='mb-4 text-4xl font-bold text-white sm:text-4xl md:text-5xl'>
              WelTechCode
            </h1>
            <h2 className='text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2'>
              Fullstack Developer
            </h2>
          </header>
          <p className='mb-6 text-base text-gray-200 sm:text-lg md:text-lg'>
            Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <div className='flex items-center mb-6 space-x-4'>
            <a href="#">
              <img src={github} alt="github" className='w-11 h-11'/>
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" className='w-11 h-11'/>
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" className='w-11 h-11'/>
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" className='w-11 h-11'/>
            </a>
          </div>
          <a href={Adam} download>
            <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>
              Download CV
            </button>
          </a>
        </section>
        <figure data-aos='fade-up' data-aos-delay='500' className='flex justify-center flex-1 mt-0 md:justify-end'>
          <img src={imghero} alt="Hero Image" className="h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[450px] object-cover rounded-lg"/>
        </figure>
       </main>
    </div>
  )
}
