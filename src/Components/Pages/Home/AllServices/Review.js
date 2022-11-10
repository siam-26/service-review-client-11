import React from 'react';
import './AllServices.css';


const Review = ({ sr }) => {
    const { customer, img, message, service_name } = sr;

    return (
        <div>
            <div className='review-div'>


                <img className='userImg w-24 h-24 mt-12 ml-24 rounded-full' src={img} alt="" />
                <p className='text-left pl-24 mt-2 '><small>{service_name}</small></p>
                <h1 className='text-left pl-24 mt-5  font-bold text-2xl'><i>{customer}</i></h1>
                <p className='w-4/5 review-message pl-24 pb-8 mt-2 font-bold text-left'><i>-"{message}"</i></p>
            </div>

        </div>

    );
};

export default Review;