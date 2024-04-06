import React from 'react';
import backgroundImage from '../assets/Img/Home.png';

const HomePage = () => {
    return (
        <div className="h-screen bg-cover bg-center">
            <img
                src={backgroundImage}
                alt="Home"
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
    );
};

export default HomePage;
