import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ProtectedRouter = () => {
  const { isLogin } = useAuth();

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouter;
