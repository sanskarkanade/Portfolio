import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';

const Contact = () => {

  const sendmessage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/manejljb", {
      method: "POST",
        headers: { "Accept": "application/json" },
        body: formData
    });

    

    if (response.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className='pt-16 bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-center h-screen px-6'>
      {/* Left Section - Social Links */}
      <div className='flex flex-col items-center text-center md:items-start md:text-left gap-6 md:w-1/2'>
        <h1 className='text-5xl font-bold text-blue-400'>Connect With Me</h1>
        <div className='flex justify-center md:justify-start gap-6 text-4xl'>
          <a href='#' className='hover:text-blue-500 transition duration-300'>
            <FaLinkedin />
          </a>
          <a href='#' className='hover:text-gray-500 transition duration-300'>
            <FaSquareGithub />
          </a>
          <a href='#' className='hover:text-blue-400 transition duration-300'>
            <FaTwitter />
          </a>
          <a href='#' className='hover:text-pink-500 transition duration-300'>
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className='md:w-1/2 bg-gray-800 p-8 rounded-2xl shadow-lg mt-8 md:mt-0 w-full max-w-lg'>
        <form className='flex flex-col gap-4' onSubmit={sendmessage}>
          <h2 className='text-2xl font-semibold text-blue-400'>Contact Me</h2>

          <label className='text-gray-300'>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required className='p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400' />

          <label className='text-gray-300'>Your Email</label>
          <input type='email' name='email' placeholder='Enter your email' required className='p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400' />

          <label className='text-gray-300'>Message</label>
          <textarea placeholder='Write your message...' name='message' required className='p-3 rounded-lg bg-gray-700 text-white h-28 focus:outline-none focus:ring-2 focus:ring-blue-400'></textarea>

          <button  className='mt-4 p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition duration-300 cursor-pointer'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
