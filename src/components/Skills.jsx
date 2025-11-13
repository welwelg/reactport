import React from 'react';
import vue from '/vue.png';
import laravel from '/laravel.png';
import react from '/react.png';
import tailwindcss from '/tailwindcss.png';
import imghero from '/imghero.png';

const skillsData = [
  { id: 1, image: vue, title: 'Vue.js', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 2, image: laravel, title: 'Laravel', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 3, image: react, title: 'React.js', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 4, image: tailwindcss, title: 'Tailwind CSS', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
];

const SkillBox = ({ image, title, description }) => {
  return (
    <article className='p-4 text-center transition-all duration-300 bg-gray-800 rounded-lg shadow-lg sm:p-6 hover:bg-purple-800'>
      <figure className='flex justify-center mb-4'>
        <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
      </figure>
      <header className='mb-2 text-lg font-semibold sm:text-xl'>{title}</header>
      <p className='text-sm text-gray-400 sm:text-base'>{description}</p>
    </article>
  );
};

export default function Skills() {
  return (
    <section id='skills' className='relative flex flex-col items-center justify-center min-h-screen px-4 py-10 overflow-hidden text-white'>
      <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>
      <img
        src={imghero}
        alt='Left Picture'
        className='absolute z-10 w-24 h-auto transform left-2 top-2 sm:left-16 sm:top-32 -rotate-12 sm:w-32 opacity-70'
      />

      <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 space-y-6 text-center sm:space-y-10'>
        <header>
          <h1 className='text-3xl font-bold sm:text-4xl'>
            My Expertise<br />and <span className='text-purple-400'>Skills</span>
          </h1>
          <p className='mt-2 text-sm text-gray-400 sm:mt-4 sm:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur sint in, iure temporibus, eaque laboriosam tempore magnam reprehenderit ut qui enim dolore blanditiis placeat commodi dicta debitis dolorum corporis.
          </p>
        </header>

        <section data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6'>
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>

      <img
        src={imghero}
        alt='Right Picture'
        className='absolute z-10 w-24 h-auto transform right-2 top-2 sm:right-16 sm:top-32 rotate-12 sm:w-32 opacity-70'
      />
    </section>
  );
}
