import React, { createContext, useEffect, useState } from 'react';
import { IUser } from '../types';
import useFetch from '../hooks/useFetch';

export interface IAuthContext {
  isLogin: boolean;
  user: IUser | null;
  setLoginStatus: () => void;
  setLogoutStatus: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLogin: false,
  user: null,
  setLoginStatus: () => {},
  setLogoutStatus: () => {},
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const { responseData } = useFetch<IUser>('/users');

  const setLoginStatus = async () => {
    setIsLogin(true);
  };

  const setLogoutStatus = () => {
    setIsLogin(false);
  };

  useEffect(() => {
    setIsLogin(responseData ? true : false);
  }, [responseData]);

  return (
    <AuthContext.Provider value={{ isLogin, user: responseData, setLoginStatus, setLogoutStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
