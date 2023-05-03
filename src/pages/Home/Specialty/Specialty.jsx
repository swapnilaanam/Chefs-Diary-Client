import React from 'react';
import { TbChefHat } from "react-icons/tb";
import { FaBook } from 'react-icons/fa';
import { GiCampCookingPot } from "react-icons/gi";

const Specialty = () => {
    return (
        <div className="flex justify-center items-center gap-24 flex-wrap">
            <div className="text-center flex flex-col items-center justify-center gap-5 bg-gray-200 w-72 h-60 rounded-lg">
                <TbChefHat className="text-8xl" />
                <h4 className="text-2xl font-medium">Best Indian Cefs</h4>
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-5 bg-gray-200 w-72 h-60 rounded-lg">
                <FaBook className="text-8xl" />
                <h4 className="text-2xl font-medium">Well Detailed Recipe</h4>
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-5 bg-gray-200 w-72 h-60 rounded-lg">
                <GiCampCookingPot className="text-8xl" />
                <h4 className="text-2xl font-medium">Easy Cooking Method</h4>
            </div>
        </div>
    );
};

export default Specialty;