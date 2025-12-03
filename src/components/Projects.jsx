import React from 'react';
import Cashless from '/Cashless.png';
import weatherapp from '/weatherapp.png';
import proj2 from '/proj2.png';
import proj3 from '/proj3.png';


const listProjects = [
  {
    image: Cashless,
    title: 'Cashless Transaction using RFID in Point of Sales',
    description: 'Laravel/Blade 9, Tailwind CSS, MySQL,  JavaScript, Bootstrap, XAMPP.',
    link: 'https://www.canva.com/design/DAG6W8atlH0/irUyypK4BGC9OqWVK3bzoA/edit?utm_content=DAG6W8atlH0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    image: weatherapp,
    title: 'Weather App',
    description: 'React.js,Vite, Tailwind CSS, Weather API',
    link: 'https://react-weather-khaki-iota.vercel.app/',
  },
  {
    image: proj3,
    title: 'Portfolio Website 3',
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
      
      <div className='absolute z-0 w-40 h-40 bg-orange-700 rounded-full opacity-50 sm:w-60 sm:h-60 blur-3xl -top-5 left-10'></div>

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
            className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-orange-800 bg-opacity-50 opacity-0 group-hover:opacity-100'
          >
            <button className='px-4 py-2 font-medium text-black bg-white shadow rounded-3xl hover:text-white hover:bg-orange-600'>
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
            My <span className='text-orange-500'>Projects</span>
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
