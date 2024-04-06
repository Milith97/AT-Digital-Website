import React, { useState } from 'react';
import Logo from '../assets/Img/Logo.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#6B3CC9]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <a href="#" className={`flex items-center py-5 px-2 ${isOpen ? 'hidden' : 'flex'}`}>
                            <img src={Logo} alt="Logo"  />
                        </a>
                    </div>
                    <div className={`hidden md:flex items-center space-x-1 ${isOpen ? 'flex' : 'hidden'}`}>
                        <a href="#" className=" text-gray-200 hover:text-gray-400">SERVICES</a>
                        <a href="#" className=" text-gray-200 hover:text-gray-400">ABOUT US</a>
                        <a href="#" className=" text-gray-200 hover:text-gray-400">CONTACT US</a>
                        <a href="#" className=" text-gray-200 hover:text-gray-400">CAREERS</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            {!isOpen ? (
                                <svg className="Hamburger" stroke="white" viewBox="0 0 24 24" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="CloseIcon" stroke="black" viewBox="0 0 24 24" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="bg-white">
                    <a href="#" className="block py-2 px-4 text-sm text-black-200 ">HOME</a>
                    <a href="#" className="block py-2 px-4 text-sm text-black-200 hover:bg-gray-700">SERVICES</a>
                    <a href="#" className="block py-2 px-4 text-sm text-black-200 hover:bg-gray-700">ABOUT US</a>
                    <a href="#" className="block py-2 px-4 text-sm text-black-200 hover:bg-gray-700">CONTACT US</a>
                    <a href="#" className="block py-2 px-4 text-sm text-black-200 hover:bg-gray-700">CAREERS</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;