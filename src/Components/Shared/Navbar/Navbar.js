import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Navbar.css';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    //logOut
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Item 1</Link></li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 22</Link></li>
                            </ul>
                        </li>
                        <li><Link>Item 3</Link></li>

                    </ul>
                </div>
                <Link to='/' className="text-2xl ml-20 font-bold">HMAS-Food</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>

                    <li tabIndex={0}>
                        <Link>
                            MyReviews

                        </Link>

                    </li>
                    <li><Link>Add Service</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <Link to='/' onClick={handleLogOut} className="login-logout font-semibold mr-10">Log out</Link>
                        :
                        <Link to='/login' className="login-logout font-semibold mr-10">Log in</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;