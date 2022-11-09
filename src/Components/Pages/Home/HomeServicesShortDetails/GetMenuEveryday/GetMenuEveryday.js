import React from 'react';
import './GetMenuEveryday.css';
import image from '../../../../Assets/Images/illustrator/illustration-4.png'

const GetMenuEveryday = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <img className='w-4/5 ml-10' src={image} alt="" />
            </div>

            <div>
                <p className='text-7xl font-bold getMenu-p'>Get the menu of your favorite platform every day</p>
            </div>
        </div>
    );
};

export default GetMenuEveryday;