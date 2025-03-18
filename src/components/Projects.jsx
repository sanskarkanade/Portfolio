import React from 'react';

const projects = [
  {
    title: 'ToDo List',
    liveDemo: 'https://sanskarkanade.github.io/HTMLrepo/Todo%20list/',
    github: 'https://github.com/sanskarkanade/HTMLrepo/tree/fd8ad96cca97d8e7ea18105d2041a46f13687fb3/Todo%20list',
    technology : 'HTML, CSS, JS',
  },
  {
    title: 'Tik-Tac-Toe',
    liveDemo: 'https://sanskarkanade.github.io/HTMLrepo/Tik-Tac-Toe/',
    github: 'https://github.com/sanskarkanade/HTMLrepo/tree/fd8ad96cca97d8e7ea18105d2041a46f13687fb3/Tik-Tac-Toe',
    technology : 'HTML, CSS, JS',
  },
  {
    title: 'Weather App',
    liveDemo: 'https://sanskarkanade.github.io/HTMLrepo/Weather%20app/',
    github: 'https://github.com/sanskarkanade/HTMLrepo/tree/fd8ad96cca97d8e7ea18105d2041a46f13687fb3/Weather%20app',
    technology : 'HTML, CSS, JS, OpenWeatherMap API',
  },
  {
    title: 'E-commerce',
    liveDemo: 'https://e-commerce-opal-delta-96.vercel.app/',
    github: 'https://github.com/sanskarkanade/React/tree/203275eac719740d1937558b89752696d120e211/E-commerce',
    technology : 'React + Tailwind CSS, Dummyjson API',
  },
];

const Projects = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-6'>
      <h1 className='text-4xl font-bold text-center mb-12 border-b-4 border-gray-700 inline-block mx-auto pb-2'>My Projects</h1>
      
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300 text-center border border-gray-700'
          >
            <h2 className='text-2xl font-bold mb-4 text-yellow-400'>{project.title}</h2>
            <p className='mb-4 text-gray-400'>{project.technology}</p>
            <div className='flex justify-center gap-4'>
              <a
                href={project.liveDemo}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold transition duration-300'
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300'
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
