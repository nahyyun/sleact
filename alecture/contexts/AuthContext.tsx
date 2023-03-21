import React, { createContext, useState, useEffect } from 'react';
import { IUser } from '../types';
import axiosInstance from '../apis';

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
  const [user, setUser] = useState<IUser | null>(null);

  const setLoginStatus = async () => {
    const userInfo = await axiosInstance.get<IUser>('/users');

    setIsLogin(true);
    setUser(userInfo);
  };

  const setLogoutStatus = () => {
    setIsLogin(false);
    setUser(null);
  };

  useEffect(() => {
    setLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, user, setLoginStatus, setLogoutStatus }}>{children}</AuthContext.Provider>
  );
};
