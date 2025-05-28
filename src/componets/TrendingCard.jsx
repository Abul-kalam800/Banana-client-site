 import React from 'react';
 
 const TrendingCard = ({trendigTip}) => {
 
    return (
        <div className='p-5 bg-green-600 rounded-sm'>
            <h3 className='text-2xl font-semibold mb-5'>{trendigTip.title}</h3>
            <p>{trendigTip.description}</p>
        </div>
    );
 };
 
 export default TrendingCard;