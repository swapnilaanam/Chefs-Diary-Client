import React from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/XJkT0L0/banner.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h2 className="mb-5 text-5xl bg-black bg-opacity-10 font-bold capitalize p-4 rounded">
                            We are <span className="text-green-400">Chef's Diary</span>
                        </h2>
                        <p className="mb-6 text-2xl font-medium bg-black bg-opacity-10 capitalize p-1 rounded mx-6">
                            Discover authentic Indian food flavors with our chef's recipes!
                        </p>
                        <Link>
                            <button className="border-0 bg-green-600 text-2xl text-white font-bold capitalize px-5 py-3 rounded-lg flex items-center gap-3 mx-auto">
                                <span>See Our Indian Chefs</span>
                                <FaAngleDoubleDown />
                            </button>
                        </Link>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;