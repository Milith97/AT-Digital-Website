import React from 'react';
import HomeImage from '../assets/Img/Home.png';

const HomePage = () => {
    return (
        
            <div
                className="bg-cover bg-center h-screen"
                style={{
                    backgroundImage: `url(${HomeImage})`,
                }}
            >
              
            </div>
    
    );
};

export default HomePage;
