import React from 'react';
import GallTilTed from '/GallTilTed.png'
import TiltedCard from '../reactbits/TiltedCard';
import LogoLoop from '../reactbits/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function About() {
  return (
    <section id='about' className='relative flex flex-col justify-between min-h-screen overflow-hidden text-white '>
      
      {/* Main Content Container */}
      <div className="container flex flex-col items-center justify-center flex-grow gap-8 px-6 py-12 mx-auto lg:py-0 lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 max-w-7xl">
        
        {/* Left Side: Image (Order 1 on Mobile, Col 1 on Desktop) */}
        <figure 
          data-aos='fade-right' 
          data-aos-delay='500'
          // Added max-w-md and mx-auto to center it perfectly on mobile
          className='relative flex flex-col items-center justify-center order-1 w-full max-w-md mx-auto mb-10 lg:order-1 lg:max-w-full lg:mx-0 lg:mb-0'
        >
          <TiltedCard
            imageSrc={GallTilTed}
            altText="WelTechCode - Developer"
            captionText="WelTechCode - Developer"
            containerHeight="300px"
            containerWidth="100%"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="flex flex-col items-center justify-start w-full h-full pt-8">
                <div className="px-4 py-2 text-sm font-bold text-center text-white rounded-full shadow-lg bg-zinc-800/90 backdrop-blur-sm">
                  WelTechCode - Developer
                </div>
              </div>
            }
          />
        </figure>
        
        {/* Right Side: Article (Order 2 on Mobile, Col 2 on Desktop) */}
        <article 
          data-aos='fade-left' // Changed fade direction for variety
          data-aos-delay='500' 
          // Text centered on mobile, Left aligned on Large screens
          className='relative order-2 w-full text-center lg:text-left lg:order-2'
        >
          {/* Background Blob: Centered on mobile, offset on desktop */}
          <div className='absolute z-0 w-40 h-40 transform -translate-x-1/2 rounded-full opacity-50 bg-orange-950 sm:w-60 sm:h-60 blur-3xl -top-10 left-1/2 lg:left-10 lg:translate-x-0'></div>
          
          <header className='relative z-10 mt-12 lg:mt-0'>
            <h1 className='mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
              About <span className='text-orange-500'>Me</span>
            </h1>
          </header>
          
          <p className='relative z-10 text-base leading-relaxed text-justify text-gray-300 sm:text-lg md:text-xl lg:leading-8'>
            I am a recent BSIT graduate majoring in Web Development,
            specializing in building full-stack applications using
            modern technologies like <span className='font-bold text-orange-500'>React</span> and <span className='font-bold text-orange-500'>Laravel</span>.
            I am highly proficient in <span className='font-bold text-orange-500'>UI/UX </span> design tools such as <span className='font-bold text-orange-500'>Figma</span> 
            and actively explore low-code platforms like <span className='font-bold text-orange-500'>Framer </span>
            and <span className='font-bold text-orange-500'>Webflow</span> to accelerate development and prototyping.
            I am a proactive learner, constantly seeking to master new technologies, frameworks, and best practices to deliver efficient,
            scalable, and modern digital solutions.
          </p>
        </article>
      </div>

      {/* Footer Section */}
      <footer
        className="relative w-full mt-auto bg-gradient-to-t to-transparent" 
        style={{ height: '120px', overflow: 'hidden'}} // Slightly reduced height for mobile
      >
        <div className="flex items-center h-full">
            <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={40} // Smaller logo on mobile usually looks cleaner
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#1f2937" 
            ariaLabel="Technology partners"
            />
        </div>
      </footer>
     
    </section>
  )
}