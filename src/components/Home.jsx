import React from 'react';
import { NavLink } from 'react-router-dom';
import Myimage from './sanskar.jpg';

const Home = () => {
  const handleMouseMove = (e, box) => {
    const rect = box.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = -y * 20;
    const rotateY = x * 20;
    box.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (box) => {
    box.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center px-6 text-white relative overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-purple-500 opacity-20 blur-3xl animate-pulse rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 opacity-20 blur-2xl animate-pulse rounded-full"></div>

      {/* Glassmorphism Card */}
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 z-10">
        {/* Image */}
        <img
          src={Myimage}
          alt="Sanskar Kanade"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-purple-400 shadow-md transition hover:scale-105"
        />

        {/* Intro Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Hey there! I’m Sanskar Kanade
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            A Computer Engineer passionate about <span className="text-blue-400 font-semibold">DevOps</span> and <span className="text-purple-400 font-semibold">Web Development</span>.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 z-10">
        {[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About Me' },
          { to: '/skill', label: 'Skills' },
          { to: '/project', label: 'Projects' },
          { to: '/contact', label: 'Contact Me' },
        ].map((item) => (
          <div
            key={item.to}
            className="h-24 w-24 sm:h-28 sm:w-28 rounded-xl border border-amber-400 bg-white/10 backdrop-blur-md text-white font-semibold flex items-center justify-center text-center shadow-md hover:shadow-lg transition duration-300 hover:bg-white/20"
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <NavLink to={item.to} className="w-full h-full flex items-center justify-center">
              {item.label}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
