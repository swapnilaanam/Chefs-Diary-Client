import React from 'react';
import { FaArrowRight, FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {

    const { chefId, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img className="w-full h-56 object-cover object-top" src={chefPicture} alt={chefName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{chefName}</h2>
                <div className="flex justify-start items-center gap-3">
                    <span className="text-lg font-medium">
                        Years Of Experience:
                    </span>
                    <div className="badge badge-lg border-0">
                        {yearsOfExperience}
                    </div>
                </div>
                <div className="flex justify-start items-center gap-3">
                    <span className="text-lg font-medium">
                        Recipes:
                    </span>
                    <div className="badge badge-lg border-0 bg-green-600">
                        {numberOfRecipes}
                    </div>
                </div>
                <div className="flex justify-start items-center gap-3 mt-1 mb-1">
                    <FaThumbsUp className='text-sky-600 text-xl' />
                    <span className="text-lg font-medium mt-0.5">
                        {likes}
                    </span>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/chefs/${chefId}`}>
                        <button className="btn btn-warning border-0 gap-3 text-lg font-bold capitalize">
                            <span>View Recipes</span>
                            <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;