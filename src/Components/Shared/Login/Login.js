import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hook/useTitle';
import { AuthContext } from '../../Contexts/UserContext';
import './Login.css';

const Login = () => {
    useTitle('Log in');
    const { logIn, googleLogIn } = useContext(AuthContext);
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

    //handleSignIn
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-bold text-center pt-4">Login now!</h1>
                    <form onSubmit={handleLogIn} className="card-body">

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
                            <button className="btn btn-primary login-btn">Login</button>
                        </div>
                        <p className="py-6 login-text font-semibold">New in HMAS-Food? <Link to='/register'><span className='register-span font-semibold'>Register now</span></Link></p>


                        <button className='btn btn-primary login-btn' onClick={handleGoogleLogin}>Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;