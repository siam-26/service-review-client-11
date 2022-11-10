import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/UserContext';

const MyReview = ({ handleReview }) => {


    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className='ml-24'>
                <form onSubmit={handleReview}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input type="text" name="name" placeholder="name" className="input input-bordered w-96" />

                        <br /><br />

                        <input type="email" name="email" placeholder="email" className="input input-bordered w-96" defaultValue={user?.email} readOnly />
                        <br /><br />
                    </div>
                    <div className="form-control pt-5">

                        <textarea name="message" className="textarea textarea-bordered h-24 w-96" placeholder="Bio"></textarea>


                    </div>
                    <button className="btn btn-primary w-72 mt-4 ml-12">Your Review</button>
                </form>
            </div>
        </div>
    );
};

export default MyReview;