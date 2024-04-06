import React from 'react';
import backgroundImage from '../assets/Img/Home.png';

const HomePage = () => {
    return (
        <div style={{
            width: '768px', // Fixed width
            height: '258px', // Hug content height
            paddingTop: '24px', // Padding top
            paddingRight: '40px', // Padding right
            paddingBottom: '32px', // Padding bottom
            paddingLeft: '40px', // Padding left
            marginTop: '525px', // Top distance from viewport top
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px', // Gap between elements
        }}>
            <img src={backgroundImage} alt="Home Image" />
            <div className='h-36 max-w-full bg-gradient-to-r from-cyan-500 to-green-500'>
                <div className='text-lg'>
                    <p className='font-semibold text-4xl'>We crush your competitors, goals, and sales records - without the B.S.</p>
                    <div>
                        <button className='bg-orange-500 text-white font-bold text-3xl px-8 py-4 rounded-lg'>Get free consultation</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
