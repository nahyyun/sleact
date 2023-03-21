import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PublicRouter = () => {
  const { isLogin } = useAuth();

  return isLogin ? <Navigate to="/workspace/channel" /> : <Outlet />;
};

export default PublicRouter;
