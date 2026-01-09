import React, { useState } from 'react';
import GradientText from '../reactbits/GradientText';

const skillsData = [
  { image: '/laravel.png', text: 'Laravel' },
  { image: '/react.png', text: 'React.js' },
  { image: '/tailwindcss.png', text: 'Tailwind CSS' },
  { image: '/html.png', text: 'HTML' },
  { image: '/css.png', text: 'CSS' },
  { image: '/js.png', text: 'JavaScript' },
  { image: '/vite.png', text: 'Vite' },
  { image: '/php.png', text: 'PHP' },
  { image: '/nodejs.jpg', text: 'Node.js' },
  { image: '/mysql.png', text: 'MySQL' },
  { image: '/postgresql.png', text: 'PostgreSQL' },
  { image: '/sqlite.jpg', text: 'SQLite' },  
  { image: '/supabase.jpg', text: 'Supabase'},
  { image: '/mongodb.jpg', text: 'MongoDB' },
  { image: '/firebase.png', text: 'Firebase' },
  { image: '/git.png', text: 'Git' },
  { image: '/githublogo.png', text: 'GitHub' },
  { image: '/postman.png', text: 'Postman' },
  { image: '/canva.png', text: 'Canva' },
  { image: '/figma.png', text: 'Figma' },
  { image: '/framer.png', text: 'Framer' },
  { image: '/webflow.png', text: 'Webflow' },
];

function SkillCard({ skill }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={`relative overflow-hidden transition-all duration-300 bg-gray-800/50 backdrop-blur-md border rounded-xl ${
        isActive
          ? 'border-orange-500 shadow-xl shadow-orange-500/20 -translate-y-1'
          : 'border-gray-700/50'
      }`}
    >
      {/* Card Glow Effect */}
      <div className={`absolute inset-0 transition-opacity duration-300 bg-gradient-to-br from-orange-500/10 to-transparent ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center p-3 sm:p-4">
        {/* Logo Container */}
        <div className={`flex items-center justify-center w-12 h-12 mb-2 transition-transform duration-300 bg-gray-700/50 rounded-lg sm:w-14 sm:h-14 sm:mb-3 md:w-16 md:h-16 ${
          isActive ? 'scale-110' : ''
        }`}>
          <img 
            src={skill.image} 
            alt={skill.text}
            className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </div>

        {/* Skill Name */}
        <h3 className="text-xs font-semibold text-center text-white sm:text-sm md:text-base">
          {skill.text}
        </h3>

        {/* Decorative Corner Element */}
        <div className={`absolute w-16 h-16 transition-all duration-300 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent -top-8 -right-8 blur-xl ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    
    <div id='skills' className="relative z-10 flex items-center justify-center min-h-screen px-3 py-8 overflow-hidden sm:px-4 md:px-6">
      
      {/* Background Blob Effect  */}
      <div className="absolute z-[-1] transform -translate-x-1/2 rounded-full opacity-40 bg-orange-950 w-64 h-32 sm:w-80 sm:h-40 md:w-96 md:h-44 lg:w-[500px] lg:h-52 blur-3xl top-8 sm:top-12 md:top-20 left-1/2"></div>
      <div className="absolute z-[-1] w-56 transform translate-x-1/2 bg-orange-800 rounded-full h-28 opacity-30 sm:w-72 sm:h-36 md:w-80 md:h-40 blur-3xl bottom-16 sm:bottom-20 right-1/2"></div>

      {/* Main Card Container */}
      <div className="relative w-full max-w-6xl">
        {/* Header */}
        <div
        data-aos='fade-down' data-aos-delay='300' className="mb-6 text-center sm:mb-8 md:mb-10">
          <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            
            <GradientText
              colors={["#ea580c", "#fed500", "#ea580c", "#ffffff", "#f97316"]}
              animationSpeed={5}
              showBorder={false}
              className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
               My Expertise & Skills
            </GradientText>
          </h1>
          <p className="max-w-2xl px-2 mx-auto mt-2 text-xs text-gray-400 sm:mt-3 sm:text-sm md:text-base lg:text-lg">
            Crafting exceptional digital experiences with modern technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div 
        data-aos='fade-up' data-aos-delay='300' className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
          {skillsData.map((skill) => (
            <SkillCard key={skill.text} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}