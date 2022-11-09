import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hook/useTitle';
import './Register.css';

const Register = () => {
    useTitle('Register');
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-bold text-center pt-4">Register now!</h1>
                    <form className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary login-btn">Register now</button>
                        </div>
                        <p className="py-6 login-text font-semibold">Already have an account? <Link to='/login'><span className='register-span font-semibold'>login</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;