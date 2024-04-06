import React from 'react';
import HomeImage from '../assets/img/Home.png';

const HomePage = () => {
    return (
        <div>
            {/* Full screen image */}
            <div
                className="bg-cover bg-center h-screen"
                style={{
                    backgroundImage: `url(${HomeImage})`,
                }}
            >
                {/* Content inside the image */}
                <div className="flex items-center justify-center h-full text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-bold">
                        Welcome to Our Website
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
