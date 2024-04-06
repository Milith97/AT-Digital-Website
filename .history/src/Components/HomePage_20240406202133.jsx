import React from 'react';
import backgroundImage from '../assets/Img/Home.png';

const HomePage = () => {
    return (
        <div className='absolute'>
            <img src={backgroundImage} alt="Home Image" className='w-full h-auto' />
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500'></div>
            <div className='h-64 max-w-full'>
                <div className='text-lg py-6 px-12'>
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



// import React from 'react';
// import backgroundImage from '../assets/Img/Home.png';

// const HomePage = () => {
//     return (
//         <div className=''>
//             <div>
//                 <img src={backgroundImage} alt="Home Image" />
//             </div>
//             <div className='h-64 max-w-full bg-gradient-to-r from-cyan-500 to-green-500 '>
//                 <div className='text-lg py-6 px-12 '>
//                     <p className='font-bold text-5xl text-white py-4'>We Crush Your Competitors, Goals, And sales Records - Without The B.S.</p>
//                     <div className=''>
//                         <button className='bg-orange-500 text-white font-bold text-sm h-9 w-56 rounded-md'>GET FREE CONSULTATION</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;
