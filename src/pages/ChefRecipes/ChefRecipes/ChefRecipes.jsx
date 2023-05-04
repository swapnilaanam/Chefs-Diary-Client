import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import ChefBanner from '../ChefBanner/ChefBanner';

const ChefRecipes = () => {
    const chef = useLoaderData();

    const {recipes} = chef;

    return (
        <div>
            <ChefBanner chef={chef}></ChefBanner>

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