import React, { useState } from 'react';
import gallery1 from '../assets/g1.jpg'
import gallery2 from '../assets/g2.jpg'
import gallery3 from '../assets/g3.jpg'
import gallery4 from '../assets/g4.jpg'
import gallery5 from '../assets/g5.jpg'
import gallery6 from '../assets/g6.jpg'
import { Tooltip } from 'react-tooltip';

const Gallery = () => {
  
 
    return (
        <div className='mb-10'>
            <h2 className='text-center font-semibold mt-20 text-4xl'>Gallery</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-16' data-tooltip-id='my-tooltip' data-tooltip-content="Welcom our gallery section" >
                <div className='object-cover h-[300px] '><img className='w-full h-full object-cover rounded-2xl ' src={gallery1} alt="gallary-1" /></div>
                <div className='object-cover h-[300px] '><img className='w-full h-full object-cover rounded-2xl' src={gallery2} alt="gallary-2" /></div>
                <div className='object-cover h-[300px] '><img className='w-full h-full object-cover rounded-2xl' src={gallery3} alt="gallary-3" /></div>
                <div className='object-cover h-[300px] '><img className='w-full h-full object-cover rounded-2xl' src={gallery4} alt="gallary-4" /></div>
                <div className='object-cover h-[300px] '><img className='w-full h-full object-cover rounded-2xl' src={gallery5} alt="gallary-5" /></div>
                <div className='object-cover h-[300px] '><img className='w-full h-full object-cover rounded-2xl' src={gallery6} alt="gallary-6" /></div>
            </div>
            <Tooltip id='my-tooltip'></Tooltip>
        </div>
    );
};

export default Gallery;