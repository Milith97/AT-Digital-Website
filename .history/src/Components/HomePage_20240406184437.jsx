import React from 'react';
import HomeImage from '../assets/img/Home.png';

const HomePage = () => {
    return (
        <div>
            <div
                className="bg-cover bg-center h-screen"
                style={{
                    backgroundImage: `url(${HomeImage})`,
                }}
            >
              
            </div>
        </div>
    );
};

export default HomePage;
