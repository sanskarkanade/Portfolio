import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // optional, you can use icons

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  if (location.pathname === "/") {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 w-full fixed flex items-center justify-between px-4 md:px-8 z-50">
      <h1 className="text-purple-500 text-2xl font-bold">Sanskar Kanade</h1>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex text-blue-600 gap-10 font-bold text-xl">
        {['Home', 'About Me', 'Skills', 'Projects', 'Contact Me'].map((text, index) => {
          const path = ["/", "/about", "/skill", "/project", "/contact"][index];
          return (
            <li key={text} className="hover:text-purple-500 hover:opacity-60 transition">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-purple-400 border-b-2 border-purple-400" : ""
                }
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-purple-500">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 md:hidden flex flex-col items-center gap-6 py-6">
          {['Home', 'About Me', 'Skills', 'Projects', 'Contact Me'].map((text, index) => {
            const path = ["/", "/about", "/skill", "/project", "/contact"][index];
            return (
              <NavLink
                key={text}
                to={path}
                onClick={() => setIsOpen(false)} // close menu on click
                className={({ isActive }) =>
                  (isActive ? "text-purple-400 border-b-2 border-purple-400" : "text-blue-600") +
                  " font-bold text-xl hover:text-purple-500 hover:opacity-60 transition"
                }
              >
                {text}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
