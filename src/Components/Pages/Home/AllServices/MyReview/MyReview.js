import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/UserContext';

const MyReview = ({ handleReview }) => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div>
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
            </div>
        </div>
    );
};

export default MyReview;