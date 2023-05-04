import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        setError('');
        setSuccess('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setSuccess('User Login Successful...');
                navigate(from, {replace: true});
            })
            .catch(error => {
                // console.log(error);
                setError(error.message);
            });
    }

    const handleSignInWithGoogle = () => {
        setError('');
        setSuccess('');

        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setSuccess('User Login Successful...');
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });
    }

    const handleSignInWithGithub = () => {
        setError('');
        setSuccess('');

        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setSuccess('User Login Successful...');
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });
    }

    return (
        <div className="card w-full max-w-xl bg-gray-200 shadow-lg mx-auto my-14 rounded-lg">
            <form onSubmit={handleSignIn} className="card-body mx-2">

                <h4 className="form-title text-center text-2xl text-black font-medium">Please Login</h4>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input type="email" id="l-email" name="email" placeholder="Enter Your Email" className="input input-bordered w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Password</span>
                    </label>
                    <input type="password" id="l-password" name="password" placeholder="Enter Your Password" className="input input-bordered w-full" required />
                </div>

                <p className="text-red-500 text-lg font-medium">{error}</p>
                <p className="text-green-600 text-lg font-medium">{success}</p>

                <div className="form-control mt-6">
                    <button className="btn text-white text-xl capitalize">Login</button>
                </div>
            </form>
            <div className="divider mx-7">OR</div>
            <div className='flex justify-center gap-8 py-7'>
                <button onClick={handleSignInWithGoogle} className="btn text-lg capitalize flex items-center gap-3">
                    <FaGoogle className="text-xl" />
                    <span>Sign In With Google</span>
                </button>
                <button onClick={handleSignInWithGithub} className="btn text-lg capitalize flex items-center gap-3">
                    <FaGithub className="text-xl" />
                    Sign In With Github
                </button>
            </div>
            <p className='text-center text-black pb-6 text-xl font-medium'>
                Doesn't Have An Account?
                <Link to="/register" className="ms-2 text-green-600 text-2xl font-bold"> Register.</Link>
            </p>
        </div>
    );
};

export default Login;