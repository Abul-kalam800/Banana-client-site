import React from 'react';
import { Link } from 'react-router';
import error from "../assets/errorpage.png"

const Page404 = () => {
    return (
        <div className={`flex justify-center items-center mt- w-11/12 flex-col error mx-auto h-screen`}>
            <h1 className='text-6xl font-semibold'>404 page</h1>
            <h2 className='text-5xl font-normal mt-5'>Data Not Found</h2>
            <div className='mt-10'>
                <Link to='/' className='bg-green-400 p-3 rounded-2xl'>Go back home</Link>
            </div>

        </div>
    );
};

export default Page404;