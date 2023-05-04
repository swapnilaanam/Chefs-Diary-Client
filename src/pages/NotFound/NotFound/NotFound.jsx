import React from 'react';
import NotFoundImage from '../../../assets/images/404NotFound.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex justify-evenly items-center flex-wrap py-5">
            <div className="flex flex-col justify-center items-center w-2/4">
                <div className="relative">
                    <h1 class="text-9xl font-extrabold text-black tracking-widest">404</h1>
                    <div class="bg-[#FF6A3D] px-2 text-base rounded rotate-12 absolute top-16 left-16">
                        Page Not Found
                    </div>
                </div>
                <div className="my-4">
                    <p className="text-xl font-medium">
                        The Page You Are Looking For Doesn't Exist...
                    </p>
                </div>
                <Link to="/">
                    <button class="mt-5">
                        <a
                            class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                        >
                            <span
                                class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>

                            <span class="relative block px-8 py-3 bg-[#1A2238] border border-current text-xl font-medium">
                                Go Home
                            </span>
                        </a>
                    </button>
                </Link>
            </div>
            <div className="w-full md:w-2/4 flex">
                <img src={NotFoundImage} alt="NotFound" style={{ maxHeight: '650px' }} />
            </div>
        </div >
    );
};

export default NotFound;