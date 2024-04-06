import React from 'react';
import backgroundImage from '../assets/Img/Home.png';

const HomePage = () => {
    return (
        <div className=" h-screen flex justify-center items-center">
            <div className="max-w-4xl mx-auto p-8">
                <img src={backgroundImage} alt="Home Image" className="w-full" />
                <div className="bg-slate-600 rounded-lg p-8 mt-8 text-white text-lg">
                    <p className="font-semibold text-4xl mb-8">We crush your competitors, goals, and sales records - without the B.S.</p>
                    <div>
                        <button className="bg-orange-500 text-white font-bold text-3xl px-8 py-4 rounded-lg">
                            Get free consultation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
