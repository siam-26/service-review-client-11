import React from 'react';
import './PopularityStatistics.css';

const PopularityStatistics = () => {
    return (
        <div className='grid grid-cols-4'>
            <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-4xl font-bold '>Service shows good taste.</p>
                </div>
            </div>

            <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-4xl font-bold satisfied-num'>976</h1>
                    <p className='satisfied-p font-semibold text-2xl'>Satisfied
                        Customer</p>
                </div>
            </div>

            <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-4xl font-bold satisfied-num'>12</h1>
                    <p className='satisfied-p font-semibold text-2xl'>Best
                        Restaurants</p>
                </div>
            </div>

            <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-4xl font-bold satisfied-num'>1K+</h1>
                    <p className='satisfied-p font-semibold text-2xl'>Food Delivered</p>
                </div>
            </div>
        </div>
    );
};

export default PopularityStatistics;