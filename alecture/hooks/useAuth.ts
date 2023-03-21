import { useContext } from 'react';
import axiosInstance from '../apis';
import { ISignUpForm, ILoginForm } from '../types/form';
import useRouter from './useRouter';
import { AuthContext } from '../contexts/AuthContext';
import { IUser } from '../types';

type SuccessResponse = 'ok';

const useAuth = () => {
  const { isLogin, user, setLoginStatus, setLogoutStatus } = useContext(AuthContext);

  const { routeTo } = useRouter();

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
        setLoginStatus();

        routeTo('/workspace/channel');
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

        setLogoutStatus();
      }
    } catch (error) {}
  };

  return {
    isLogin,
    user,
    setLoginStatus,
    setLogoutStatus,
    signUp,
    login,
    logout,
  };
};

export default useAuth;
