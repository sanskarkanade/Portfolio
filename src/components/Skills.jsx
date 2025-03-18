import React from 'react';
import { SiCplusplus, SiCss3, SiHtml5, SiJavascript, SiPostgresql, SiPython, SiReact, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML', symbol: <SiHtml5 className="text-orange-500 text-5xl" /> },
  { name: 'CSS', symbol: <SiCss3 className="text-blue-500 text-5xl" /> },
  { name: 'JavaScript', symbol: <SiJavascript className="text-yellow-400 text-5xl" /> },
  { name: 'React', symbol: <SiReact className="text-cyan-400 text-5xl" /> },
  { name: 'Tailwind CSS', symbol: <SiTailwindcss className="text-teal-400 text-5xl" /> },
  { name: 'C++', symbol: <SiCplusplus className="text-blue-700 text-5xl" /> },
  // { name: 'Java', symbol: <SiJava className="text-red-600 text-5xl" /> },
  { name: 'SQL', symbol: <SiPostgresql className="text-blue-400 text-5xl" /> },
  { name: 'Python', symbol: <SiPython className="text-yellow-500 text-5xl" /> },
];

const Skills = () => {
  return (
    <div className='pt-16 bg-gradient-to-r from-black via-gray-900 to-black text-white min-h-screen'>
      <h1 className='text-4xl font-bold text-center mb-8'>My Skills</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-center'>
        {skills.map((skill, index) => (
          <div key={index} className='p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300'>
            <div className='flex justify-center mb-2'>{skill.symbol}</div>
            <p className='text-lg font-medium'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;