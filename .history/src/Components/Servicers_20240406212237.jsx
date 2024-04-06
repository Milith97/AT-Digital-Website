import React from 'react';
import Service1 from '../assets/Img/Service1.png';
const Servicers = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-414 h-414 bg-gray-300 flex-shrink-0 mb-6 md:mb-0 mr-0 md:mr-6">        
                <img src={Service1} alt="Service Image" className="w-full h-full object-cover" />
            </div>

            {/* Right Side (Content) */}
            <div className="max-w-md">
                <h2 className="text-xs font-semibold mb-4 text-[#6B3CC9]">Web & Mobile App Development</h2>
                <p className="text-lg mb-6 ">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors">LEARN MORE</button>
            </div>
        </div>
    );
};

export default Servicers;
