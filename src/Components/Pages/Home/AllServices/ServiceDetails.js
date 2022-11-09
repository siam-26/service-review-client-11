import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../Hook/useTitle';
import MyReview from './MyReview/MyReview';
import Review from './Review';
import './serviceDetails.css'


const ServiceDetails = () => {
    const { img, service_name, price, description } = useLoaderData();
    useTitle('Service-Details');

    return (
        <div>
            <div className="card bg-base-100 w-full">
                <h1 className="mb-8 mt-12 text-5xl font-bold text-center serviceDetails-h">{service_name}</h1>


                <div>
                    <img className='w-4/5 h-96 ml-36 rounded-xl serviceDetails-img' src={img} alt="" />
                </div>


                <div className="card-body items-center text-center body">

                    <h3 className='price font-bold'>Price: {price}</h3>
                    <p className='serviceDetails-description font-semibold'>{description}</p>





                </div>




            </div>
            <div>
                <h1 className='mt-12 mb-12 text-5xl font-bold review-heading'>People's Review</h1>
                <div className='review-container h-auto w-full'>
                    <Review></Review>
                </div>
                <MyReview></MyReview>
            </div>
        </div>
    );
};

export default ServiceDetails;