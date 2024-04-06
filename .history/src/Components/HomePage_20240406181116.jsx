import React from 'react';
import backgroundImage from '../assets/Img/HomePage.png';

const HomePage = () => {
    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        </div>
    );
};

export default HomePage;
