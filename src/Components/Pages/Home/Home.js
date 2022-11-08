import React from 'react';
import './Home.css';
import banner from '../../Assets/Images/Banner/banner.png'
import HomeServicesShortDetails from './HomeServicesShortDetails/HomeServicesShortDetails';

const Home = () => {
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

            <div>
                <HomeServicesShortDetails></HomeServicesShortDetails>
            </div>
        </div>
    );
};

export default Home;