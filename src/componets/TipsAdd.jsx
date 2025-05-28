 import React from 'react';
import { Link } from 'react-router';
 
 const TipsAdd = () => {
    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <h1 className='text-5xl font-semibold text-green-400'>Don't have any tips Please add your Tips</h1>
            <Link to="/sharegardentips" className='p-3 bg-green-600 mt-10'>Add Tips</Link>
        </div>
    );
 };
 
 export default TipsAdd;