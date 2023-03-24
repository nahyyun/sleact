import React, { createContext } from 'react';
import { IUser } from '../types';
import useFetch from '@hooks/useFetch';

export interface IAuthContext {
  isLogin: boolean;
  user: { isLoading: boolean; responseData: IUser | null };
  fetch: () => Promise<IUser>;
}

export const AuthContext = createContext<IAuthContext>({
  isLogin: false,
  user: { isLoading: false, responseData: null },
  fetch: () => Promise.resolve({} as IUser),
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, responseData, fetch } = useFetch<IUser>('/users');

  return (
    <AuthContext.Provider
      value={{
        isLogin: responseData?.nickname ? true : false,
        user: { isLoading, responseData },
        fetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
