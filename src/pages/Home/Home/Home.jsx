import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';


const Home = () => {
    const chefs = useLoaderData();

    return (
        <div>
            <HomeBanner></HomeBanner>
            <section id="chefs-section" className="my-32">
                <h3 className='text-center text-4xl font-semibold mb-16'>All Our Chefs</h3>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.chefId}
                            chef={chef}
                        >
                        </ChefCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;