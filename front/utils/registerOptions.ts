import REGEX from '@utils/regex';

const RegisterOptions = {
  signUp: {
    email: {
      required: { value: true, message: '이메일을 입력해주세요.' },
      pattern: { value: REGEX.email, message: '이메일 형식이 올바르지 않습니다.' },
    },
    nickname: {
      required: { value: true, message: '닉네임을 입력해주세요.' },
      minLength: { value: 4, message: '최소 4자리 이상을 입력해주세요.' },
    },
    password: {
      required: { value: true, message: '비밀번호를 입력해주세요.' },
      pattern: { value: REGEX.password, message: '영문과 숫자, 특수문자를 조합하여 8~15자리를 입력해주세요.' },
    },
    passwordCheck: {
      required: { value: true, message: '비밀번호를 입력해주세요.' },
    },
  },

  login: {
    email: {
      required: { value: true, message: '이메일을 입력해주세요.' },
    },
    password: {
      required: { value: true, message: '비밀번호를 입력해주세요.' },
    },
  },
};

export default RegisterOptions;
