import { useContext } from 'react';
import axiosInstance from '../apis';
import { ISignUpForm, ILoginForm } from '../types';
import useRouter from './useRouter';
import { AuthContext } from '@contexts/AuthContext';
import { IUser } from '../types';
import useSocket from '@hooks/useSocket';

type SuccessResponse = 'ok';

const useAuth = () => {
  const {
    isLogin,
    user: { isLoading, responseData: userInfo },
    fetch,
  } = useContext(AuthContext);

  const { routeTo } = useRouter();

  const { socket, disconnect } = useSocket();

  const signUp = async (formData: Omit<ISignUpForm, 'passwordCheck'>) => {
    try {
      const res = await axiosInstance.post<SuccessResponse>('/users', formData);

      if (res === 'ok') {
        // 회원가입 성공 스낵바

        routeTo('/login');
      }
    } catch (error) {
      // 회원가입 실패 스낵바 (동일 이메일)
      console.log('catch error', error);
    }
  };

  const login = async (formData: ILoginForm) => {
    try {
      const res = await axiosInstance.post<IUser>('/users/login', formData);

      if (res) {
        // 로그인 성공 스낵바
        const userInfoRes = await fetch();
        routeTo(`/workspace/${userInfoRes.Workspaces[0].name}`);
      }
    } catch (error) {
      // 로그인 실패 스낵바 (email, pwd 불일치)
      console.log('error', error);
    }
  };

  const logout = async () => {
    try {
      const res = await axiosInstance.post<SuccessResponse>('/users/logout');
      if (res === 'ok') {
        routeTo('/login');
        fetch();
      }
    } catch (error) {}
  };

  return {
    isLogin,
    user: { isLoading, userInfo },
    signUp,
    login,
    logout,
  };
};

export default useAuth;
