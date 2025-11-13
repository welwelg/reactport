import React from 'react'
import imgabout from "/imgabout.png";
import imgabout1 from "/imgabout1.png";
import imgabout2 from "/imgabout2.png";

export default function About() {
  return (
    <section id='about' className='flex items-center justify-center min-h-screen px-4 overflow-hidden text-white sm:px-6'>
      <div className='grid items-center w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 sm:gap-12'>
        <figure data-aos='fade-right' data-aos-delay='500'
        className='relative flex flex-wrap justify-center gap-4'
        >
            <div className='h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform 
            rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full'></div>
            <img src={imgabout1} alt="about picture 1" 
            className='absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 s,:h-32
            rounded-3xl shadow-lg'/>
            <img src={imgabout2} alt="about picture 2"
            className='relative z-10 rounded-lg shadow-lg w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96'/>
            <img src={imgabout} alt="about picture"
            className='absolute z-10 w-20 h-20 transform translate-y-12 shadow-lg buttom-0 right-5 sm:right-10 sm:w-32 sm:h-32 rounded-3xl'/>
        </figure>
        <article data-aos='fade-right' data-aos-delay='500' className='relative text-center lg:text-left'>
            <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50
            -top-5 left-10'></div>
            <header>
                <h1 className='mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6'>
                    About Me
                </h1>
            </header>
            <p className='mb-6 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl sm:mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
                 velit ea laboriosam eveniet ad doloremque accusamus a cum obcaecati corporis pariatur iste, 
                 nihil voluptatum? Nam totam distinctio minima perferendis fugit.
            </p>
            <footer>
                <button className='inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none
                hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg'>
                    Learn More
                </button>
            </footer>
        </article>
      </div>
    </section>
  )
}
