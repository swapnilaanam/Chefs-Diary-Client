import React from 'react';
import { Rating } from '@smastrom/react-rating';
import { FcLike } from "react-icons/fc";

import '@smastrom/react-rating/style.css';

const RecipeCard = ({ recipe }) => {

    const { recipeId, recipeName, ingredients, cookingMethod, rating } = recipe;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl" style={{minHeight: "504px"}}>
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
                    <button className="btn btn-warning  border-0 gap-3 text-lg font-bold capitalize">
                        <span>Add To Favorite</span>
                        <FcLike className="text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;