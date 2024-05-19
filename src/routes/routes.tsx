import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Login from "../pages/Login";
import Profile from "../pages/profile";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Login />,
            },
            {
                path: '/profile',
                element: <PrivateRoute component={Profile} authenticated />,
            }
        ]
    }
])