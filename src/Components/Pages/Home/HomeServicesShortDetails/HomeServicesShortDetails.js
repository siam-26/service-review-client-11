import React from 'react';
import './HomeServicesShortDetails.css';

const HomeServicesShortDetails = ({ service }) => {
    const { img, service_name, price, description } = service;
    return (
        <div>
            <div>

                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10">
                        <img src={img} alt="" className="w-36 h-32 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center body">
                        <h2 className="card-title pt-4 name">{service_name}</h2>
                        <h3 className='price font-bold'>{price}</h3>
                        <p className='short-description'>{description}</p>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomeServicesShortDetails;