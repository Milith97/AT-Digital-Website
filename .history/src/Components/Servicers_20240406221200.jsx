import React from 'react';
import Service1 from '../assets/Img/Service1.png';
const Servicers = () => {
    return (
        <div className="flex flex-col md:flex-row ">
            <div className=" lg:w-2/5 xl:w-2/5 flex-shrink-0 mb-6 md:mb-0 mr-0 md:mr-6 items-center justify-center">        
                <img src={Service1} alt="Service Image" className="w-auto h-auto object-cover" />
            </div>

            {/* Right Side (Content) */}
            <div className="lg:w-3/5 items-center justify-center">
                <h2 className="sm:text-3xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text:4xl  font-bold mb-4 text-[#6B3CC9]">Web & Mobile App Development</h2>
                <p className=" sm:text-xl md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-normal  mb-6 ">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors">LEARN MORE</button>
            </div>
        </div>
    );
};

export default Servicers;