 import React from 'react';
import { useLoaderData } from 'react-router';
 
 const Tipdetails = () => {
    const singleTips = useLoaderData();
    const {Description
,category
,photo,plant,selected,title}=singleTips
    console.log(singleTips)
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-center font-semibold my-5 text-3xl'>Our Garden Tip Details</h2>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
            <div className='border bg-green-200'>
                <img className='mx-auto' src={photo} alt="" />
            </div>
            <div>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p>Category: {category}</p>
                <p>Planet: {plant}</p>
                <p>{Description}</p>
            </div>
          </div>

        </div>
    );
 };
 
 export default Tipdetails;