import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="card w-full max-w-xl bg-gray-200 shadow-lg mx-auto my-16 rounded-lg">
            <form className="card-body mx-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input type="email" id="l-name" name="email" placeholder="Enter Your Email" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Password</span>
                    </label>
                    <input type="password" id="l-password" name="password" placeholder="Enter Your Password" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white text-xl capitalize">Login</button>
                </div>
            </form>
            <div className="divider mx-7">OR</div>
            <div className='flex justify-center gap-8 py-7'>
                <button className="btn text-lg capitalize flex items-center gap-3">
                    <FaGoogle className="text-xl"/> 
                    <span>Sign In With Google</span>
                </button>
                <button className="btn text-lg capitalize flex items-center gap-3">
                    <FaGithub className="text-xl"/>
                    Sign In With Github
                </button>
            </div>
            <p className='text-center text-black py-6 text-xl font-medium'>
                Doesn't Have An Account? 
                <Link to="/register" className="ms-2 text-green-600 text-2xl font-bold"> Register.</Link>
            </p>
        </div>
    );
};

export default Login;