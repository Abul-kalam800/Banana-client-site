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
            <h2 className='text-center font-semibold my-5 text-5xl'>Our Garden Tip Details</h2>
            <div className='flex justify-end'>
                 <button  className=' btn bg-green-300 text-xl  rounded-xl px-8 hover:bg-green-700'>Like</button>
            </div>
          <div className='flex flex-col lg:flex-row justify-center  gap-6 p-5 my-10 '>
            <div className='w-full'>
                <img className='rounded-xl' src={photo} alt="" />
            </div>
            <div className='border p-5 rounded-xl'>
                <h3 className='text-3xl font-semibold mb-5'>{title}</h3>
                <p><span className='font-bold'>Category: </span> {category}</p>
                <p><span className='font-bold'>Planet: </span> {plant}</p>
                <p><span className='font-bold'>Description: </span>{Description}</p>
            </div>
           
          </div>

        </div>
    );
 };
 
 export default Tipdetails;