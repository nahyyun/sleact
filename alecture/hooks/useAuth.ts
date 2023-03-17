import { AxiosInstance } from '../apis';
import { ISignUpForm } from '../types/form';

type SuccessResponse = 'ok';

type Response = SuccessResponse | null;

const useAuth = () => {
  const signUp = async (formData: ISignUpForm) => {
    try {
      const res = await AxiosInstance.post<Response>('/users', formData);
      if (res) {
        // 회원가입 성공 스낵바
      }
    } catch (error) {
      // 회원가입 실패 스낵바 (동일 이메일)
    }
  };

  return {
    signUp,
  };
};

export default useAuth;
