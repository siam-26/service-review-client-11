import React from 'react';
import './Home.css';
import banner from '../../Assets/Images/Banner/banner.png'
import HomeServicesShortDetails from './HomeServicesShortDetails/HomeServicesShortDetails';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const servicesHome = useLoaderData();

    return (
        <div>

            <div className='header grid grid-cols-2'>
                <div className='home-header-content text-justify mt-28 pl-20'>
                    <h1 className='text-6xl font-bold'>The Best</h1>
                    <h1 className='text-6xl font-bold'>Restaurants</h1>
                    <h1 className='text-6xl font-bold'>In Your Home</h1>
                    <p className='font-light text-2xl mt-4'>Send unique gift to anywhere in Bangladesh form our 'HMAS-Food' collection.</p>
                </div>
                <img src={banner} alt="" />
            </div>

            <h1 className='text-center text-4xl mt-20 ml-4 pb-4'>Our Services</h1>
            <div className='services-div pl-12 grid grid-cols-3'>

                {
                    servicesHome.products.map(service => <HomeServicesShortDetails
                        key={service._id}
                        service={service}
                    ></HomeServicesShortDetails>)
                }

            </div>
            <div className='btn-div pb-12'>
                <Link to='/allservicess'>
                    <button className="seeAll-btn font-bold mt-8">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;