import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import Specialty from '../Specialty/Specialty';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    const chefs = useLoaderData();

    return (
        <div>
            <HomeBanner></HomeBanner>

            <section className="mt-32 mb-36">
                <h3 className='text-center text-4xl font-semibold mb-16'>Our Specialty</h3>
                <Specialty></Specialty>
            </section>

            <section id="chefs-section" className="mt-32 mb-36">
                <h3 className='text-center text-4xl font-semibold mb-16'>All Our Chefs</h3>
                <div className="flex flex-wrap justify-center items-center gap-12">
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.chefId}
                            chef={chef}
                        >
                        </ChefCard>)
                    }
                </div>
            </section>

            <section className="mt-32 mb-36">
            <h3 className='text-center text-4xl font-semibold mb-16'>Customer Reviews</h3>
                <Reviews></Reviews>
            </section>
        </div>
    );
};

export default Home;