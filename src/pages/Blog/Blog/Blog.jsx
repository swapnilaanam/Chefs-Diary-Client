import React, { useRef } from 'react';
import ReactToPdf from 'react-to-pdf';

const Blog = () => {
    const blogRef = useRef();

    return (
        <div className="min-h-screen">
            <h2 className="text-3xl font-bold mt-16 mb-4 text-center">Welcome To Our Blog</h2>
            <ReactToPdf targetRef={blogRef} filename="chefs-diary-blog.pdf" x={10} y={7} scale={0.7}>
                {({ toPdf }) => (
                    <div className="text-center mb-16">
                        <button className="bg-red-600 text-white text-xl font-medium px-4 py-2 rounded-md" onClick={toPdf}>
                            Generate Pdf
                        </button>
                    </div>
                )}
            </ReactToPdf>
            <section id="blogs" className="w-2/3 mx-auto" ref={blogRef}>
                <div className="collapse collapse-arrow collapse-open mb-7 rounded-lg">
                    <input type="checkbox" className="peer peer-open" />
                    <div className="collapse-title bg-gray-300 text-black text-2xl font-medium capitalize">
                        1. Tell us the differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content bg-gray-200 text-black text-xl">
                        <p className="pt-4">The difference between uncontrolled and controlled components are:- </p>
                        <ol className="ms-4 pb-3">
                            <li className="my-4">
                                1. Uncontrolled components maintain their internal states. But the controlled components doesn't.
                            </li>
                            <li className="my-4">
                                2. In uncontrolled components data are controlled by their DOM. On the other hand, controlled components
                                data are controlled by the parent component.
                            </li>
                            <li>
                                3. Uncontrolled components accept their current value as a prop. Controlled components use a ref for
                                their current value.
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="collapse collapse-arrow collapse-open mb-7 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-gray-300 text-black text-2xl font-medium capitalize">
                        2. How to validate React props using PropTypes ?
                    </div>
                    <div className="collapse-content bg-gray-200 text-black text-xl">
                        <p className="pt-4">There are the steps by which we can validate React props using PropTypes:</p>
                        <ol className="ms-4 pb-3">
                            <li className="my-4">
                                1. Install the prop-types library using npm install prop-types --save.
                            </li>
                            <li className="my-4">
                                2. Import the PropTypes module from the 'prop-types' library by writing, import PropTypes from 'prop-types'.
                            </li>
                            <li className="my-4">
                                3. In the component's PropTypes static property, specify the expected types of props.
                            </li>
                            <li>
                                4. React automatically verifies a prop's type against the PropTypes declaration when it receives a prop from a component. React will display an error in the console if the prop is not of the anticipated type.
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="collapse collapse-arrow mb-7 collapse-open rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-gray-300 text-black text-2xl font-medium capitalize">
                        3. Tell us the difference between node js and express js.
                    </div>
                    <div className="collapse-content bg-gray-200 text-black text-xl">
                        <p className="pt-4">The difference between nodejs and express js are:-</p>
                        <ol className="ms-4 pb-3">
                            <li className="my-4">
                                1. Node js is built on Google’s V8 engine. On the other hand, express js is built on Node.js.
                            </li>
                            <li className="my-4">
                                2. Node js is used to build server-side, input-output, event-driven apps. But the express js
                                is used to build web-apps using approaches and principles of Node.js.
                            </li>
                            <li>
                                3. Node js has no routing feature. But express js has the routing feature.
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="collapse collapse-arrow mb-7 collapse-open rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-gray-300 text-black text-2xl font-medium capitalize">
                        4. What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content bg-gray-200 text-black text-xl">
                        <p className="pt-4">
                            A custom hook is a custom reusable function, not provided by default. Custom hooks start with "use".
                        </p>
                        <p className="pt-4">
                            When we have component logic that can be used by multiple components, we can use that logic to
                            build a custom hook.
                        </p>
                        <p className="pt-4">
                            <strong>Example:</strong> useFetch, which we can use in multiple components to fetch data.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;