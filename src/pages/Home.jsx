import React from 'react';
import Banner from '../componets/Banner';
import FechersGurdeners from '../componets/FechersGurdeners';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <Banner></Banner>
           <FechersGurdeners></FechersGurdeners> 
        </div>
    );
};

export default Home;