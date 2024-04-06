import React, { useState } from 'react';
import Logo from '../assets/Img/Logo.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
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
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className="py-5 px-3 text-gray-200 hover:text-gray-400">HOME</a>
                        <a href="#" className="py-5 px-3 text-gray-200 hover:text-gray-400">SERVICES</a>
                        <a href="#" className="py-5 px-3 text-gray-200 hover:text-gray-400">ABOUT US</a>
                        <a href="#" className="py-5 px-3 text-gray-200 hover:text-gray-400">CONTACT US</a>
                        <a href="#" className="py-5 px-3 text-gray-200 hover:text-gray-400">CAREERS</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            {!isOpen ? (
                                <div className="md:hidden">
                                <button onClick={toggleMenu} className="text-white focus:outline-none">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                                    </svg>
                                </button>
                            </div>

                            ) : (
                                <svg className="CloseIcon" stroke="black" viewBox="0 0 24 24" style={{ width: "23px", height: "23px" }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            {/* </div><div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white h-screen`}> */}
            <div className={`md:flex items-center space-x-1 ${isOpen ? 'flex flex-col md:flex-row md:space-x-1 md:space-y-0' : 'hidden'}`}>
                <a href="#" className="block py-2 px-4 text-sm text-black-200 ">HOME</a>
                <a href="#" className="block py-2 px-4 text-sm text-black-200 hover:bg-gray-700">SERVICES</a>
                <a href="#" className="block py-2 px-4 text-sm text-black-200 hover:bg-gray-700">ABOUT US</a>
                <a href="#" className="block py-2 px-4 text-sm text-black-200 hover:bg-gray-700">CONTACT US</a>
                <a href="#" className="block py-2 px-4 text-sm text-black-200 hover:bg-gray-700">CAREERS</a>
            </div>
        </nav>
    );
};

export default NavBar;
