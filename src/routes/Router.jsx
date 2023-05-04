import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog/Blog";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes/ChefRecipes";
import NotFound from "../pages/NotFound/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://chef-recipe-hunter-assignment-server-side-swapnilaanam.vercel.app/chefs')
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'chefs/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-assignment-server-side-swapnilaanam.vercel.app/chefs/${params.id}`) 
            },
            {
                path: '*', 
                element: <NotFound></NotFound>
            }
        ]
    }
]);

export default router;
