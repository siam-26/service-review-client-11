import React from 'react';
import { Link } from 'react-router-dom';
import './serviceDetails.css'

const ServiceDetails = () => {
    return (
        <div className="card w-96 bg-base-100 w-full">
            <h1 className="mb-8 mt-12 text-5xl font-bold text-center serviceDetails-h">Chicken Burger</h1>

            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                    <div className="hero-overlay bg-black bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">

                            <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card-body items-center text-center body">

                <h3 className='price font-bold'>Price: 89.00tk</h3>
                <p className='serviceDetails-description font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed molestias quibusdam distinctio qui exercitationem consequuntur suscipit veritatis, sint ea ipsam, perspiciatis cumque architecto laborum! Ut excepturi, aliquid magni dolore, quibusdam blanditiis quasi eaque maiores, cum non fuga aut quas veritatis porro asperiores corrupti ducimus saepe error maxime nostrum consectetur! Provident quae nisi similique in distinctio earum beatae doloremque quaerat voluptatum, voluptate molestiae labore iste ea, dicta hic dignissimos tenetur eos tempore delectus autem soluta magnam quisquam. Similique repellat neque voluptatibus, minus delectus dolorem quibusdam pariatur ipsa doloremque nisi natus quasi soluta animi placeat! Adipisci incidunt nulla vero magni blanditiis assumenda!</p>

                <div>
                    <Link to='/serviceDetails'>
                        <button className="allServices-btn font-bold mt-8">view details</button>
                    </Link>
                </div>
            </div>



        </div>
    );
};

export default ServiceDetails;