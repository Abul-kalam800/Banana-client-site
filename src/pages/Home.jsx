import React, { useLayoutEffect } from 'react';
import Banner from '../componets/Banner';
import FechersGurdeners from '../componets/FechersGurdeners';
import { useLoaderData } from 'react-router';

const Home = () => {
    const fethersGardeners = useLoaderData();
    return (
        <div className='w-11/12 mx-auto'>
           <Banner></Banner>
           <FechersGurdeners fethersGardeners={fethersGardeners}></FechersGurdeners> 
        </div>
    );
};

export default Home;