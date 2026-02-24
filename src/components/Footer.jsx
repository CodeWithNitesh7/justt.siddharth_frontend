import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react"; // icons ke liye
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const naviagte = useNavigate();

  const project = () => {
    naviagte('/projects');
  }
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 sm:grid-cols-1 gap-8">

        {/* Logo & About */}
        <div className="flex flex-col items-start space-y-4">
          <img
            src="/Logo.png"
            alt="logo"
            className="h-18 w-18 object-cover rounded-full"
          />
          <p className="text-gray-300 text-sm">
            Welcome to my Portfolio .
            Here is my details Contacts me  !.
            <br />
            <b className='text-yellow-600 font-bold '>Thanks</b>
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Contact</h2>

          <p className="flex items-center gap-2 text-gray-400">
            <Mail size={18} /> nitesh.backend@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <Mail size={18} /> siddharthgupta327@gmail.com
          </p>
          {/* <p className="flex items-center gap-2 text-gray-400">
            <Phone size={18} /> +91 9455447729
          </p> */}
          <p className="flex items-center gap-2 text-gray-400">
            <MapPin size={18} /> India , Proud to be Indian 
          </p>
        </div>

        {/* Projects / Links */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Projects</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a onClick={project} className="hover:text-white">Gym Management</a></li>
            <li><a onClick={project} className="hover:text-white">Quiz App</a></li>
            <li><a onClick={project} className="hover:text-white">Portfolio Website</a></li>
            <li><a onClick={project} className="hover:text-white text-yellow-600">See More</a></li>

          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Nitesh Gupta | All Rights Reserved
      </div>
    </footer>
  );
}
