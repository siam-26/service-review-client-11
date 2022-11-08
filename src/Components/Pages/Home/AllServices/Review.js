import React from 'react';
import './AllServices.css';

const Review = () => {
    return (
        <div className='review-div'>
            <img className='userImg w-24 h-24 mt-12 ml-24 rounded-full' src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" alt="" />
            <h1 className='text-left pl-24 mt-5  font-bold text-2xl'>name</h1>
            <p className='w-4/5 review-message pl-24 pb-8 mt-5 font-bold text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptatibus reiciendis, doloremque impedit qui inventore asperiores, neque hic amet aliquam explicabo quibusdam architecto nihil nostrum est minima, iusto laboriosam voluptatem? Non id assumenda dolores mollitia. Odit dolor vel fugiat possimus.</p>
        </div>
    );
};

export default Review;