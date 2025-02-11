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
import Loader from "../shared/Loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/add-food',
                element: <PrivateRoute><AddFood /></PrivateRoute>
            },
            {
                path: '/all-foods',
                element: <AllFoods />
            },
            {
                path: '/my-foods',
                element: <PrivateRoute><MyFoods /></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateFood /></PrivateRoute>
            },
            {
                path: '/food/:id',
                element: <FoodDetails />
            },
            {
                path: '/gallery',
                element: <Gallery />
            },
            {
                path: '/purchase/:id',
                element: <PrivateRoute><FoodPurchase /></PrivateRoute>
            },
            {
                path: '/my-orders',
                element: <PrivateRoute><MyOrders /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '*',
        element: <Loader />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;