import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext/authContext";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  authenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, authenticated, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext)
  
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
