import React from 'react';
import backgroundImage from '../assets/Img/Home.png';

const HomePage = () => {
    return (
        <div>
            <img src={backgroundImage} alt="Home Image" />
            <div className='h-20 max-w-fit bg-slate-600 '>

            </div>
        </div>
    );
};

export default HomePage;