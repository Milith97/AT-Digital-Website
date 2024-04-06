import React from 'react';
import backgroundImage from '../assets/img/Home.png';

const HomePage = () => {
    return (
        <div className="h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
            {/* Content of the home page */}
        </div>
    );
};

export default HomePage;
