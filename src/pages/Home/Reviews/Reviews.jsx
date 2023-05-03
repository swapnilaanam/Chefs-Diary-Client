import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
    return (
        <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="w-96 bg-base-300 px-6 py-2 text-center rounded-lg">
                <div className="text-xl font-medium my-5">
                    <blockquote>
                        <FaQuoteLeft className="mb-2" />
                        I tried cooking Chicken Tikka Masala following this website recipe. The cooked food was delicious.
                    </blockquote>
                </div>
                <div className="rating rating-lg rating-half">
                    <input type="radio" name="rating-5" className="rating-hidden" />
                    <input type="radio" name="rating-5" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-5" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-5" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-5" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-5" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-5" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-5" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-5" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-5" className="bg-green-500 mask mask-star-2 mask-half-1" checked readOnly/>
                    <input type="radio" name="rating-5" className="bg-green-500 mask mask-star-2 mask-half-2" />
                </div>
                <p className="my-3 text-2xl font-semibold">Rohan Singh</p>
            </div>

            <div className="w-96 bg-base-300 px-6 py-2 text-center rounded-lg">
                <div className="text-xl font-medium my-5">
                    <blockquote>
                        <FaQuoteLeft className="mb-2" />
                        Rajma Chawal recipe is one of the best recipe I tried. The cooking method told in this website is so easy
                        to follow.
                    </blockquote>
                </div>
                <div className="rating rating-lg rating-half">
                    <input type="radio" name="rating-6" className="rating-hidden" />
                    <input type="radio" name="rating-6" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-6" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-6" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-6" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-6" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-6" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-6" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-6" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-6" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-6" className="bg-green-500 mask mask-star-2 mask-half-2" checked readOnly/>
                </div>
                <p className="my-3 text-2xl font-semibold">Annanya Mehra</p>
            </div>

            <div className="w-96 bg-base-300 px-6 py-2 text-center rounded-lg">
                <div className="text-xl font-medium my-5">
                    <blockquote>
                        <FaQuoteLeft className="mb-2" />
                        Most of the recipes of this website are impressive. It has become my go to recipe book.
                    </blockquote>
                </div>
                <div className="rating rating-lg rating-half">
                    <input type="radio" name="rating-7" className="rating-hidden" />
                    <input type="radio" name="rating-7" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-7" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-7" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-7" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-green-500 mask mask-star-2 mask-half-2" checked readOnly/>
                    <input type="radio" name="rating-7" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-green-500 mask mask-star-2 mask-half-2" />
                </div>
                <p className="my-3 text-2xl font-semibold">Nitu Sharma</p>
            </div>
        </div>
    );
};

export default Reviews;