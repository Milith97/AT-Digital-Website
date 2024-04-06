// import React from 'react';
// import Service1 from '../assets/Img/Service1.png';
// const Servicers = () => {
//     return (
//         <div className="flex flex-col md:flex-row items-center justify-center">
//             <div className=" lg:w-2/5 flex-shrink-0 mb-6 md:mb-0 mr-0 md:mr-0">        
//                 <img src={Service1} alt="Service Image" className="xl:w-full xl:h-full object-cover" />
//             </div>

//             {/* Right Side (Content) */}
//             <div className="lg:w-3/5">
//                 <h2 className="sm:text-3xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text:4xl  font-bold mb-4 text-[#6B3CC9]">Web & Mobile App Development</h2>
//                 <p className=" sm:text-xl md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-normal  mb-6 ">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
//                 <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors">LEARN MORE</button>
//             </div>
//         </div>
//     );
// };

// export default Servicers;

import React from 'react';
import Service1 from '../assets/Img/Service1.png';

const Services = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Left Side (Image) */}
            <div className="w-400 h-400  flex-shrink-0 mb-6 md:mb-0 mr-0 md:mr-6">
                {/* Replace the 'src' attribute with your image URL */}
                <img src={Service1} alt="Service Image" className="w-full h-full object-cover" />
            </div>

            {/* Right Side (Content) */}
            <div className="max-w-md bg-slate-400">
                <h2 className=" md:text-2xl lg:text-3xl xl:text-2xl 2xl:text:4xl  font-bold mb-4 text-[#6B3CC9]">Web & Mobile App Development</h2>
                <p className="md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-normal mb-6">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors">LEARN MORE</button>
            </div>
        </div>
    );
};

export default Services;

