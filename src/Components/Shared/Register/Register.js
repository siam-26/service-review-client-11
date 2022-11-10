import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hook/useTitle';
import { AuthContext } from '../../Contexts/UserContext';
import './Register.css';

const Register = () => {
    useTitle('Register');
    const { createEmailPassword, googleLogIn, updateProfileUpdate } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    //handleGoogleLogIn
    const handleGoogleLogin = () => {
        googleLogIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    const create_Email_Password = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                updateUserProfileHandler(name, photo)
            })
            .catch(error => console.error(error));


        //Update user profile
        const updateUserProfileHandler = (name, photo) => {
            const profile = {
                displayName: name,
                photoURL: photo
            }
            updateProfileUpdate(profile)
                .then(() => {

                })
                .catch(error => {

                })
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-bold text-center pt-4">Register now!</h1>
                    <form onSubmit={create_Email_Password} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Your photo" className="input input-bordered" />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary login-btn">Register now</button>
                        </div>
                        <p className="py-6 login-text font-semibold">Already have an account? <Link to='/login'><span className='register-span font-semibold'>login</span></Link></p>

                        <button className='btn btn-primary login-btn' onClick={handleGoogleLogin}>Google</button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;