import React from 'react';
import backgroundImage from '../assets/Img/Home.png';

const HomePage = () => {
    return (
        <div>
            <img src={backgroundImage} alt="Home Image" />
            <div className='h-36 max-w-full bg-slate-600 '>
                <div className='text-lg'>
                    <text>We crush your competitors, goals, and sales records - without the B.S.</text>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
