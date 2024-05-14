import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Login from "../pages/Login";
import Profile from "../pages/profile";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/profile',
        element: <PrivateRoute component={<Profile/> as any} authenticated/>,
    }
])