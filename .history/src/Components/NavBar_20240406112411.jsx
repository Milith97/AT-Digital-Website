// NavBar.js
import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#6B3CC9]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* Logo */}
                        <div>
                            <a href="#" className="flex items-center py-5 px-2">
                                <img src="path/to/your/logo.png" alt="Logo" style={{ width: "238.89px", height: "25px" }} />
                            </a>
                        </div>
                    </div>
                    {/* Primary Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className="py-5 px-3 text-gray-200 hover:text-gray-400">Home</a>
                        <a href="#" className="py-5 px-3 text-gray-200 hover:text-gray-400">About Us</a>
                        <a href="#" className="py-5 px-3 text-gray-200 hover:text-gray-400">Contact Us</a>
                        <a href="#" className="py-5 px-3 text-gray-200 hover:text-gray-400">Career</a>
                    </div>
                    {/* Mobile button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <a href="#" className="block py-2 px-4 text-sm text-gray-200 hover:bg-gray-700">Home</a>
                <a href="#" className="block py-2 px-4 text-sm text-gray-200 hover:bg-gray-700">About Us</a>
                <a href="#" className="block py-2 px-4 text-sm text-gray-200 hover:bg-gray-700">Contact Us</a>
                <a href="#" className="block py-2 px-4 text-sm text-gray-200 hover:bg-gray-700">Career</a>
            </div>
        </nav>
    );
};

export default NavBar;
