import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext/useAuth";
import Loading from "../components/Loading";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  authenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, authenticated, ...rest }) => {
  const {isAuthenticated, isLoading} = useAuth();

  if(isLoading) {
    return <Loading/>
  }

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
