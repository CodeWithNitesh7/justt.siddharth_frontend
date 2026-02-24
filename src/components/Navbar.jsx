import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#ACDBFB] p-4 flex items-center justify-between Absolute left-0 right-0 z-50">
            {/* Logo + Header */}
            <div className="flex items-center gap-4">
                <img
                    src="/Logo.png"
                    alt="Logo"
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
                />
                <h1 className="text-xl md:text-3xl font-bold text-cyan-700">Nitesh Gupta</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 text-lg font-medium text-gray-700">
                <Link to="/" className="hover:text-cyan-600">Home</Link>
                <Link to="/about" className="hover:text-cyan-600">About</Link>
                <Link to="/projects" className="hover:text-cyan-600">Projects</Link>
                <Link to="/services" className="hover:text-cyan-600">Services</Link>
                <Link to="/contact" className="hover:text-cyan-600">Contact-Us</Link>
                {/* <Link to="/resume" className="hover:text-cyan-600">Resume</Link> */}
                <button
                    onClick={() => window.open("https://github.com/CodeWithNitesh7/", "_blank")}
                    className="bg-cyan-700 hover:bg-cyan-600 text-blue-200 hover:text-blue-100 rounded-xl px-3 py-2"
                >
                    Github
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-cyan-700"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#ACDBFB] flex flex-col items-center gap-4 py-4 text-lg font-medium text-gray-700 md:hidden shadow-md z-10">
                    <Link to="/" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/projects" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>Projects</Link>
                    {/* <Link to="/resume" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>Resume</Link> */}
                    <Link to="/services" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/contact" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>Contacts</Link>

                    <button
                        onClick={() => window.open("https://github.com/CodeWithNitesh7/", "_blank")}
                        className="bg-cyan-700 hover:bg-cyan-600 text-blue-200 hover:text-blue-100 rounded-xl px-3 py-2"
                    >
                        Github
                    </button>

                </div>
            )}
        </div>
    );
}
