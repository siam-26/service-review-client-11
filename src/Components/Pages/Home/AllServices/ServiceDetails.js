import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../Hook/useTitle';
import { AuthContext } from '../../../Contexts/UserContext';
import MyReview from './MyReview/MyReview';
import Review from './Review';
import './serviceDetails.css'


const ServiceDetails = () => {
    const [showReviews, setShowReviews] = useState([]);

    useEffect(() => {
        fetch('https://hmas-food-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setShowReviews(data));
    }, [])

    const { _id, img, service_name, price, description } = useLoaderData();
    useTitle('Service-Details');
    const { user } = useContext(AuthContext);

    //Create Review to send DB
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const reviews = {
            service: _id,
            service_name: service_name,
            customer: name,
            img,
            email,
            message
        }
        fetch('https://hmas-food-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Ordered placed successfully...');
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }

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
                <h1 className='mt-12 mb-12 text-5xl font-bold review-heading pl-24'>People's Review</h1>
                <div className='review-container h-auto w-full'>

                    {
                        showReviews.map(sr => <Review
                            key={sr._id}
                            sr={sr}
                        >

                        </Review>)
                    }
                </div>
                <div>
                    {
                        <MyReview></MyReview>
                    }

                </div>


                {/* <div>
                    <form onSubmit={handleReview}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input type="text" name="name" placeholder="name" className="input input-bordered w-full" />
                            <input type="email" name="email" placeholder="email" className="input input-bordered w-full" defaultValue={user?.email} />

                        </div>
                        <div className="form-control">

                            <textarea name="message" className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>


                        </div>
                        <button type="submit">submit</button>
                    </form>
                </div> */}
            </div>
        </div>
    );
};

export default ServiceDetails;