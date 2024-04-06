import React, { useState } from 'react';
import Logo from '../assets/Img/Logo.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#6B3CC9]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <a href="#" className="flex items-center py-5 px-2">
                            <img src={Logo} alt="Logo" style={{ width: "238.89px", height: "25px" }} />
                        </a>
                    </div>
                    <div className={`md:hidden ${isOpen ? 'hidden' : 'flex'} items-center`}>
                        <button onClick={toggleNavbar} className="text-white focus:outline-none">
                            <svg className="Hamburger" stroke="white" viewBox="0 0 24 24" style={{ width: "23px", height: "23px" }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
                <div className="max-w-6xl mx-auto px-4">
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
