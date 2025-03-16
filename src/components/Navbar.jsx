import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 w-full fixed flex items-center justify-between'>
      <h1 className='text-purple-500 text-2xl font-bold ml-4'>Sanskar Kanade</h1>
      <div className='mr-4'>
        <ul className='flex text-blue-600 gap-10 font-bold text-xl '>
            <li className='hover:text-purple-500 hover:opacity-60 transition'>Home</li>
            <li className='hover:text-purple-500 hover:opacity-60 transition'>About Me</li>
            <li className='hover:text-purple-500 hover:opacity-60 transition'>Skills</li>
            <li className='hover:text-purple-500 hover:opacity-60 transition'>Projects</li>
            <li className='hover:text-purple-500 hover:opacity-60 transition'>Contact Me</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
