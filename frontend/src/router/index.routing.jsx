import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'


import Error404 from "../components/Error404";
import Register from "../pages/Auth/Register"
import Login from "../pages/Auth/Login"
import Tasks from "../pages/Home/Tasks";
import Archive from "../pages/Home/Archive";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes />,
        children: [
            { index: true, element: <Login /> },
            { path: 'register', element: <Register /> }
        ],
    },
    {
        path: '/tasks',
        element: <PrivateRoutes />,
        children: [
            {
                index: true,
                element: <Tasks />,
            },
            {
                path: 'archive',
                element: <Archive />,
            },
        ],
    },
    {
        path: '*',
        element: <Error404 />,
    },
]);