import { AxiosInstance } from '../apis';
import { ISignUpForm, ILoginForm } from '../types/form';
import useRouter from './useRouter';

type SuccessResponse = 'ok';

type Response = SuccessResponse | null;

const useAuth = () => {
  const { routeTo } = useRouter();

  const signUp = async (formData: ISignUpForm) => {
    try {
      const res = await AxiosInstance.post<Response>('/users', { body: JSON.stringify(formData) });
      if (res) {
        // 회원가입 성공 스낵바
        routeTo('/login');
      }
    } catch (error) {
      // 회원가입 실패 스낵바 (동일 이메일)
    }
  };

  const login = async (formData: ILoginForm) => {
    try {
      const res = await AxiosInstance.post<Response>('/users/login', { body: JSON.stringify(formData) });
      if (res) {
        // 로그인 성공 스낵바
        routeTo('/');
      }
    } catch (error) {
      // 로그인 실패 스낵바 (email, pwd 불일치)
    }
  };

  return {
    signUp,
    login,
  };
};

export default useAuth;
