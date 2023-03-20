import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLogin: false,
  setLoginStatus: (status: boolean) => {},
  user: { email: '', nickname: '', id: 0 },
  setUser: (user: IUser) => {},
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(document.cookie ? true : false);
  const [user, setUser] = useState<IUser>({ email: '', nickname: '', id: 0 });

  const setLoginStatus = (status: boolean) => {
    setIsLogin(status);
  };

  return <AuthContext.Provider value={{ isLogin, setLoginStatus, user, setUser }}>{children}</AuthContext.Provider>;
};
