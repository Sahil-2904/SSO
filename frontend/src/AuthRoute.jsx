import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AuthRoute = ({ children, redirectTo }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner
  }

  return user ? children : <Navigate to={redirectTo} />;
};

export default AuthRoute;
