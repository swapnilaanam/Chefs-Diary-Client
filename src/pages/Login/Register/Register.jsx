import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser, updateUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photo, email, password);

        setError('');
        setSuccess('');

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // console.log(createdUser);
                setSuccess('User Registered Successfully...');
                handleUpdateUser(createdUser, name, photo);
                form.reset();
            })
            .catch(error => {
                // console.log(error);
                setError(error.message);
            })
    }

    const handleUpdateUser = (user, name, photo) => {
        updateUser(user, name, photo)
            .then(() => { })
            .catch(error => {
                setError(error.message);
            });
    }

    return (
        <div>
            <div className="card w-full max-w-xl bg-gray-200 shadow-lg mx-auto mt-8 mb-14 rounded-lg">
                <form onSubmit={handleRegister} className="card-body mx-2">

                    <h4 className="form-title text-center text-2xl text-black font-medium">Please Register</h4>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Name</span>
                        </label>
                        <input type="text" id="r-name" name="name" placeholder="Enter Your Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Photo URL</span>
                        </label>
                        <input type="photo" id="r-photo" name="photo" placeholder="Enter Your Photo URL" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="email" id="r-email" name="email" placeholder="Enter Your Email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        <input type="password" id="r-password" name="password" placeholder="Enter Your Password" className="input input-bordered w-full" required />
                    </div>

                    <p className="text-red-500 text-lg font-medium">{error}</p>
                    <p className="text-green-600 text-lg font-medium">{success}</p>

                    <div className="form-control mt-6">
                        <button className="btn text-white text-xl capitalize">Register</button>
                    </div>
                </form>

                <p className='text-center text-black pb-6 text-xl font-medium'>
                    Already Have An Account?
                    <Link to="/login" className="ms-2 text-green-600 text-2xl font-bold"> Login.</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;