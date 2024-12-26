import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import NotFound from "../shared/NotFound";
import AddFood from "../pages/AddFood";
import AllFoods from "../pages/AllFoods";
import PrivateRoute from "../private/PrivateRoute";
import MyFoods from "../pages/MyFoods";
import UpdateFood from "../pages/UpdateFood";
import FoodDetails from "../pages/FoodDetails";
import Gallery from "../pages/Gallery";
import FoodPurchase from "../pages/FoodPurchase";
import MyOrders from "../pages/MyOrders";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/add-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/all-foods',
                element: <AllFoods></AllFoods>
            },
            {
                path: '/my-foods',
                element: <PrivateRoute><MyFoods></MyFoods></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>
            },
            {
                path: '/food/:id',
                element: <FoodDetails></FoodDetails>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/purchase/:id',
                element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>
            },
            {
                path: '/my-orders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;