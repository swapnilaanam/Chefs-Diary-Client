import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { ToastContainer, toast } from 'react-toastify';

import '@smastrom/react-rating/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart } from 'react-icons/fa';

const RecipeCard = ({ recipe }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const { recipeId, recipeName, ingredients, cookingMethod, rating } = recipe;

    const handleAddToFavorite = () => {
        toast.success('The Recipe Is Your Favorite ❤️!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setIsFavorite(true);
    }

    return (
        <div className="card card-compact w-96 bg-base-300 shadow-xl" style={{ minHeight: "504px" }}>
            <div className="card-body">
                <h2 className="card-title text-3xl text-center">{recipeName}</h2>
                <h4 className="text-xl font-medium">Ingredients: </h4>
                <ol className="ms-8 list-decimal">
                    {ingredients.map((ingredient, index) => <li
                        key={index}
                        className="text-lg"
                    >
                        {ingredient}
                    </li>)}
                </ol>
                <h4 className="text-xl font-medium">Cooking Method:</h4>
                <p className="ms-2 text-lg">{cookingMethod}.</p>
                <div className="flex items-center gap-5 my-3">
                    <Rating
                        style={{ maxWidth: 140 }}
                        readOnly
                        value={rating}
                    />
                    <span className="text-2xl font-medium">{rating}</span>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToFavorite}
                        className="btn bg-green-600 hover:bg-green-700 border-0 gap-3 text-lg font-bold capitalize"
                        disabled={isFavorite}
                    >
                        <span>Add To Favorite</span>
                        <FaHeart className="text-2xl" />
                    </button>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default RecipeCard;