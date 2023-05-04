import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const ChefRecipes = () => {
    const chef = useLoaderData();

    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, recipes } = chef;

    return (
        <div>
            <div className="hero min-h-16 bg-base-200">
                <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:justify-evenly lg:items-center">
                    <img src={chefPicture} className=" object-cover object-top rounded m-4" style={{height: "450px", minWidth: "750px"}}/>
                    <div className="mx-10 py-7">
                        <h1 className="text-4xl font-bold">{chefName}</h1>
                        <h4 className="pt-5 text-xl font-semibold">Biography: </h4>
                        <p className="py-3 text-lg">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className="mt-4">
                            <div className="flex justify-start items-center gap-3 mb-4">
                                <span className="text-lg font-medium">
                                    Years Of Experience:
                                </span>
                                <div className="badge badge-lg border-0">
                                    {yearsOfExperience}
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-3 mb-4">
                                <span className="text-lg font-medium">
                                    Number Of Recipes:
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
                        </div>
                    </div>
                </div>
            </div>

            <section id="chef-recipes-section" className="mt-32 mb-36">
                <h3 className='text-center text-4xl font-semibold mb-16'>Chef Recipes</h3>
                <div className="flex flex-wrap justify-center items-center gap-12">
                    {
                        recipes.map(recipe => <RecipeCard
                            key={recipe.recipeId}
                            recipe={recipe}
                        >
                        </RecipeCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default ChefRecipes;