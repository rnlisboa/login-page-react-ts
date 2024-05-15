import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext/authContext";
import { useAuth } from "../contexts/authContext/useAuth";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  authenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, authenticated, ...rest }) => {
  const {user, isLoading} = useAuth();
  console.log("privateRoute", user)

  if(isLoading) {
    return "caregando...."
  }
  return user ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
