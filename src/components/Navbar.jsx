import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className='h-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 w-full fixed flex items-center justify-between'>
      <h1 className='text-purple-500 text-2xl font-bold ml-4'>Sanskar Kanade</h1>
      <div className='mr-4'>
        <ul className='flex text-blue-600 gap-10 font-bold text-xl '>
          <li className='hover:text-purple-500 hover:opacity-60 transition'>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "text-purple-400 border-b-2 border-purple-400" : ""}
            >
              Home
            </NavLink>
          </li>
          <li className='hover:text-purple-500 hover:opacity-60 transition'>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "text-purple-400 border-b-2 border-purple-400" : ""}
            >
              About Me
            </NavLink>
          </li>
          <li className='hover:text-purple-500 hover:opacity-60 transition'>
            <NavLink
              to="/skill"
              className={({ isActive }) => isActive ? "text-purple-400 border-b-2 border-purple-400" : ""}
            >
              Skills
            </NavLink>
          </li>
          <li className='hover:text-purple-500 hover:opacity-60 transition'>
            <NavLink
              to="/project"
              className={({ isActive }) => isActive ? "text-purple-400 border-b-2 border-purple-400" : ""}
            >
              Projects
            </NavLink>
          </li>
          <li className='hover:text-purple-500 hover:opacity-60 transition'>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? "text-purple-400 border-b-2 border-purple-400" : ""}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
