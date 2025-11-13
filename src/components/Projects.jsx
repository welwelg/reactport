import React from 'react';
import proj1 from '/proj1.png';
import proj2 from '/proj2.png';
import proj3 from '/proj3.png';


const listProjects = [
  {
    image: proj1,
    title: 'Portfolio Website 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    link: '',
  },
  {
    image: proj2,
    title: 'Portfolio Website 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    link: '',
  },
  {
    image: proj3,
    title: 'Portfolio Website 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    link: '',
  },
   {
    image: proj1,
    title: 'Portfolio Website 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    link: '',
  },
  {
    image: proj2,
    title: 'Portfolio Website 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    link: '',
  },
  {
    image: proj3,
    title: 'Portfolio Website 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    link: '',
  },
];

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className='relative max-w-sm overflow-hidden bg-gray-800 rounded shadow-lg group'>
      
      <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>

      <div className='relative z-10'>
        <figure className='relative'>
          <img
            src={image}
            alt={title}
            className='object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110'
          />
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100'
          >
            <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]'>
              Live Preview
            </button>
          </a>
        </figure>

        <div className='px-6 py-4'>
          <header>
            <h3 className='mb-2 text-xl font-bold text-white'>{title}</h3>
          </header>
          <p className='text-base text-gray-200'>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <main id='projects' className='p-4'>
      <section  data-aos='fade-up' data-aos-delay='300'>
        <header className='text-center'>
          <h1 className='mb-6 text-3xl font-bold text-white sm:text-4xl'>
            My <span className='text-purple-400'>Projects</span>
          </h1>
          <p className='mt-2 text-sm text-gray-400 sm:mt-4 sm:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae reiciendis pariatur autem.
          </p>
        </header>
      </section>

      
      <section data-aos='fade-up' data-aos-delay='500' className='flex flex-wrap justify-center gap-4 mt-6'>
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
