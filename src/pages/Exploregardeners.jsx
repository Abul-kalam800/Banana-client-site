 import React from 'react';
import { useLoaderData } from 'react-router';
import Gardenar from '../componets/Gardenar';
 
 const Exploregardeners = () => {
    const gardenarData = useLoaderData()
    console.log(gardenarData)
 
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center text-6xl mt-20 mb-10'>Explore  gurdeners</h1>
          <div className=' grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mb-10'>
              {
                gardenarData.map(gardener=><Gardenar key={gardener._id} gardener={gardener}></Gardenar>)
            }
          </div>
        </div>
    );
 };
 
 export default Exploregardeners;