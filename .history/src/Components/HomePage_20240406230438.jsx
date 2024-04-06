import React from 'react';
import backgroundImage from '../assets/Img/Home.png';

const HomePage = () => {
    return (
        <div className=''>
            <div>
                <img className={"w-full h-[100vh]"} src={backgroundImage} alt="Home Image" />
            </div>
            <div className={"absolute w-[30vw] text-2xl bg-gradient-to-r from-pink-600 to-blue-400  md:static md:w-full  bottom-[3vw] left-[3vw] max-[768px]:static"}>
                <div className='text-lg py-6 px-12 '>
                    <p className='font-bold text-5xl text-white py-4'>We Crush Your Competitors, Goals, And sales Records - Without The B.S.</p>
                    <div className=''>
                        <button className='bg-orange-500 text-white font-bold text-sm h-9 w-56 rounded-md'>GET FREE CONSULTATION</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
