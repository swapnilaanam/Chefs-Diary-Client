import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <nav className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="hover:text-green-600"><Link to="/">Home</Link></li>
                        <li className="hover:text-green-600"><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-extrabold text-green-500">Chef's Diary</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="hover:text-green-600"><Link to="/" className="text-lg font-medium">Home</Link></li>
                    <li className="hover:text-green-600"><Link to="/blog" className="text-lg font-medium">Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center me-4">
                {
                    user ?
                        <>
                            <div className="dropdown dropdown-end dropdown-hover">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <h4 className="justify-between">
                                            {user.displayName}
                                        </h4>
                                    </li>
                                </ul>
                            </div>
                            <button onClick={handleLogOut} className="btn btn-warning ms-4 px-6 text-xl font-medium capitalize">
                                Logout
                            </button>
                        </> :
                        <button className="btn btn-warning ms-4 px-6 text-xl font-medium capitalize">
                            <Link to="/login">Login</Link>
                        </button>
                }


            </div>
        </nav>
    );
};

export default Header;