import React, { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  authenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, authenticated, ...rest }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
