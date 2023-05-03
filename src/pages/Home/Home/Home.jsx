import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div>
                {
                    
                }
            </div>
        </div>
    );
};

export default Home;