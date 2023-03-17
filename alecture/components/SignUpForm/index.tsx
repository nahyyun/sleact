import React from 'react';
import InputWithLabel from '@components/InputWithLabel';
import Button from '@components/Button';
import { useForm } from 'react-hook-form';
import * as S from './style';
import REGEX from '@utils/regex';
import { ISignUpForm } from '../../types/form';
import useAuth from '../../hooks/useAuth';

const SignUpForm = () => {
  const { signUp } = useAuth();

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ISignUpForm>({
    mode: 'onChange',
    defaultValues: { email: '', nickname: '', password: '', passwordCheck: '' },
    criteriaMode: 'all',
  });

  const onSubmit = handleSubmit((formData) => {
    signUp(formData);
  });

  const emailRegister = register('email', {
    required: { value: true, message: '이메일을 입력해주세요.' },
    pattern: { value: REGEX.email, message: '이메일 형식이 올바르지 않습니다.' },
  });

  const nicknameRegister = register('nickname', {
    required: { value: true, message: '닉네임을 입력해주세요.' },
    minLength: { value: 4, message: '최소 4자리 이상을 입력해주세요.' },
  });

  const passwordRegister = register('password', {
    required: { value: true, message: '비밀번호를 입력해주세요.' },
    pattern: { value: REGEX.password, message: '영문과 숫자, 특수문자를 조합하여 8~15자리를 입력해주세요.' },
  });

  const passwordCheckRegister = register('passwordCheck', {
    required: { value: true, message: '비밀번호를 입력해주세요.' },
    validate: (rePassword, { password }) => (rePassword !== password ? '비밀번호가 일치하지 않습니다.' : undefined),
  });

  return (
    <S.Form onSubmit={onSubmit}>
      <InputWithLabel labelId="email-label" title="이메일 주소" type="email" id="email" {...emailRegister} />
      <S.Error>{errors.email?.message}</S.Error>

      <InputWithLabel labelId="nickname-label" title="닉네임" type="text" id="nickname" {...nicknameRegister} />
      <S.Error>{errors.nickname?.message}</S.Error>

      <InputWithLabel labelId="password-label" title="비밀번호" type="password" id="password" {...passwordRegister} />
      <S.Error>{errors.password?.message}</S.Error>

      <InputWithLabel
        labelId="password-check-label"
        title="비밀번호 확인"
        type="password"
        id="password-check"
        {...passwordCheckRegister}
      />
      <S.Error>{errors.passwordCheck?.message}</S.Error>

      <Button type="submit" disabled={!isValid}>
        회원가입
      </Button>
    </S.Form>
  );
};

export default SignUpForm;
