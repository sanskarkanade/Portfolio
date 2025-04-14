import React from 'react';
import { NavLink } from 'react-router-dom';
import Myimage from './sanskar.jpg'

const Home = () => {

  const handleMouseMove = (e, box) => {
    const rect = box.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = -y * 50;
    const rotateY = x * 50;

    box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (box) => {
    box.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black h-screen flex items-center justify-center text-white relative overflow-hidden">

      {/* Neon Background Effect */}
      {/* <div className="absolute inset-0 bg-blue-900 opacity-20 blur-3xl"> hii</div> */}

      {/* Content Section */}
      <div className="absolute left-20 top-1/3 transform -translate-y-1/2">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
          Hey there! I'm Sanskar Kanade
        </h1>
        <p className="text-xl mt-4 text-gray-300">
          A Computer Engineer exploring the world of <span className="text-blue-400 font-semibold">DevOps</span> & <span className="text-purple-400 font-semibold">Web Development</span>.
        </p>
      </div>

      {/* Profile Image with Glow Effect */}
      <img
        src={Myimage}
        className="absolute right-32 top-1/2 transform -translate-y-1/2 w-96 h-96 object-cover rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/50 transition-transform hover:scale-105 hover:shadow-blue-400/80"
        alt="Sanskar Kanade"
      />

      {/* Floating Light Effects */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Other components*/}
      <div className='flex bottom-28 left-10 absolute gap-5'>
        <div className='h-40 w-32 rounded-2xl border-4 border-amber-400 flex justify-center items-center 
                     bg-gray-800 text-white shadow-lg transition-transform duration-200'
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}> <NavLink to="/">Home</NavLink></div>
        <div className='h-40 w-32 rounded-2xl border-4 border-amber-400 flex justify-center items-center 
                     bg-gray-800 text-white shadow-lg transition-transform duration-200'
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}><NavLink to='/about'>About Me</NavLink></div>
        <div className='h-40 w-32 rounded-2xl border-4 border-amber-400 flex justify-center items-center 
                     bg-gray-800 text-white shadow-lg transition-transform duration-200'
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}><NavLink to="/skill">Skills</NavLink></div>
        <div className='h-40 w-32 rounded-2xl border-4 border-amber-400 flex justify-center items-center 
                     bg-gray-800 text-white shadow-lg transition-transform duration-200'
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}><NavLink to="/project">Projects</NavLink></div>
        <div className='h-40 w-32 rounded-2xl border-4 border-amber-400 flex justify-center items-center 
                     bg-gray-800 text-white shadow-lg transition-transform duration-200'
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}><NavLink to="/contact">Contact Me</NavLink></div>
      </div>

    </div>
  );
};

export default Home;
