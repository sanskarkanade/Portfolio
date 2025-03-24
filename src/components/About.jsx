import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white h-screen flex justify-center items-center px-6">
      <div className="max-w-4xl bg-gray-950 p-10 rounded-2xl shadow-lg border border-gray-800">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-white animate-fade-in">
          About Me
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          I'm a web developer passionate about building{" "}
          <span className="text-blue-400 font-semibold">
            interactive and dynamic applications
          </span>
          . I specialize in{" "}
          <span className="text-green-400 font-semibold">ReactJS</span> and
          have experience developing{" "}
          <span className="text-gray-300 font-semibold">
            eCommerce platforms, weather apps with live data integration
          </span>{" "}
          and many more.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed text-center mt-4">
          Currently, I'm learning{" "}
          <span className="text-yellow-400 font-semibold">Node.js</span>,{" "}
          <span className="text-purple-400 font-semibold">Express</span>, and{" "}
          <span className="text-cyan-400 font-semibold">MongoDB</span> to expand
          my skills in{" "}
          <span className="text-red-400 font-semibold">backend development</span>{" "}
          and build{" "}
          <span className="text-pink-400 font-semibold">
            full-stack applications
          </span>
          . I enjoy working on projects that blend functionality with great user
          experience and am always eager to learn and experiment with new
          technologies.
        </p>

        <div className="flex justify-center mt-6">
          <NavLink
            to='/contact'
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Let's Connect
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
