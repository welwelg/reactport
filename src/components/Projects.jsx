import React from "react";
import Cashless from "/Cashless.png";
import weatherapp from "/weatherapp.png";
import coffeemenu from "/coffeemenu.png";
import githubfinder from "/githubfinder.png";
import brgy from "/brgy.jpg";


// ===================================
// 1. PROJECT DATA (Structure remains the same as previous response)
//    Ensure you set missing links to an empty string ("")
// ===================================
const listProjects = [

  {
    image: brgy,
    title: "Barangay Management System ",
    description:"Laravel12, React.js, InertiaJS,ShadcnUI, Pusher, TailwindCSS",
    live: "",
    github: "https://github.com/welwelg/BarangayManagementSystemFinal",
    canva: "https://www.canva.com/design/DAG71qXqQBk/vE1K_CGSX0h3C4IQhpWgIA/edit?utm_content=DAG71qXqQBk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    image: coffeemenu,
    title: "Coffee Menu : add a coffee using links image or photos",
    description: "Laravel, React.js, Inertia, JavaScript/TypeScript, Tailwind CSS, MySQL, XAMPP, Cloudinary",
    live: "https://coffeemenu.onrender.com",
    github: "https://github.com/welwelg/CoffeeMenuUpdated",
    canva: "https://www.canva.com/design/DAG6dXd0nwA/YH92Dsocuy16Kfz4cg4-ng/edit?utm_content=DAG6dXd0nwA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    image: githubfinder,
    title: "Github Finder : track or view your github account and other users",
    description:"React.js, Vite, TailwindCSS",
    live: "https://githubfinder-git-main-weltechcodes-projects.vercel.app/",
    github: "",
    canva: "https://www.canva.com/design/DAG7vFaq_Mo/KRu1iSKljrHhxSgrIX1B8Q/edit?utm_content=DAG7vFaq_Mo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    image: Cashless,
    title: "Cashless Transaction using RFID in Point of Sales",
    description:
      "Laravel/Blade 9, Tailwind CSS, MySQL,  JavaScript, Bootstrap, XAMPP",
    live: "",
    github: "https://github.com/welwelg/CashlessTransact",
    canva: "https://www.canva.com/design/DAG6W8atlH0/irUyypK4BGC9OqWVK3bzoA/edit?utm_content=DAG6W8atlH0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton/view",
  },
  {
    image: weatherapp,
    title: "Weather App : track weather in real-time",
    description: "React.js,Vite, Tailwind CSS, Weather API",
    live: "https://react-weather-khaki-iota.vercel.app/",
    github: "https://github.com/welwelg/react-Weather",
    canva: "",
  },
  
  
];

// ===================================
// 2. UPDATED PROJECT CARD COMPONENT
// ===================================
const ProjectCard = ({ image, title, description, live, github, canva }) => {
  const links = [
    { href: live, text: "Live Preview", primary: true },
    { href: github, text: "View on GitHub", primary: true },
    { href: canva, text: "View in Canva", primary: true },
  ];

  // Check if at least one link is available to show the buttons
  const hasLinks = links.some(link => link.href);

  return (
    <article className="relative h-full max-w-sm overflow-hidden bg-white/5 border border-transparent rounded-xl shadow-lg transition-all duration-300 ease-in-out group hover:shadow-2xl hover:border-orange-500/50 hover:scale-[1.02]">
      <div className="relative z-10 flex flex-col h-full">
        <figure className="relative flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-40 transition-transform duration-500 group-hover:scale-105"
          />
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 transition-opacity duration-300 opacity-0 bg-black/70 group-hover:opacity-100"
          >
            {hasLinks ? (
              // Case 1: Display available links
              links.map((link, index) =>
                link.href && (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[200px]" 
                  >
                    <button
                      className={`w-full px-4 py-2 text-sm font-semibold rounded-full shadow-lg transition-colors duration-300
                        ${link.primary 
                          ? "text-white bg-orange-600 hover:bg-orange-500"
                          : "text-white bg-gray-700/80 hover:bg-gray-700"} `}
                    >
                      {link.text}
                    </button>
                  </a>
                )
              )
            ) : (
              
              <p className="p-3 text-center text-white border rounded-lg bg-red-600/30 border-red-500/50">
                No external links provided for this project.
              </p>
            )}
          </div>
        </figure>

        <div className="flex-grow px-6 py-4">
          <header>
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          </header>
          <p className="text-base text-gray-300">{description}</p>
        </div>
      </div>
    </article>
  );
};

// ===================================
// 3. PROJECTS COMPONENT (No changes needed here)
// ===================================
export default function Projects() {
  return (
    <main id="projects" className="p-4">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            My <span className="text-orange-500">Projects</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-2 text-sm text-gray-400 sm:mt-4 sm:text-base text-balance"> 
            Explore a curated selection of projects where I've leveraged
            <span className="text-orange-500"> modern frameworks </span> and <span className="text-orange-500"> best practices </span> to solve real-world
            problems. Each project reflects my passion for clean code and
            effective front-end and back-end development.
          </p>
        </header>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="grid grid-cols-1 gap-6 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center max-w-7xl">
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            live={project.live}
            github={project.github}
            canva={project.canva}
          />
        ))}
      </section>
    </main>
  );
}