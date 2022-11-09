import React from 'react';
import './MyReview.css';

const MyReview = () => {
    return (
        <div className="form-control w-full max-w-xs">

            <input type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Your photo" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs" />



            <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

            <button className="btn btn-warning">Warning</button>



        </div>
    );
};

export default MyReview;