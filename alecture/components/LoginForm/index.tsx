import InputWithLabel from '@components/common/InputWithLabel';
import React from 'react';
import useAuth from '@hooks/useAuth';
import { ILoginForm } from 'types';
import Button from '@components/common/Button';
import { useForm } from 'react-hook-form';
import RegisterOptions from '@utils/registerOptions';
import * as S from './style';

const LoginForm = () => {
  const { login } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>({
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = handleSubmit((loginData) => {
    login(loginData);
  });

  const emailRegister = register('email', RegisterOptions.login.email);
  const passwordRegister = register('password', RegisterOptions.login.password);

  return (
    <S.Form onSubmit={onSubmit}>
      <InputWithLabel labelId="email-label" title="이메일 주소" type="email" id="email" {...emailRegister} />
      <S.Error>{errors.email?.message}</S.Error>

      <InputWithLabel labelId="password-label" title="비밀번호" type="password" id="password" {...passwordRegister} />
      <S.Error>{errors.password?.message}</S.Error>

      <Button type="submit">로그인</Button>
    </S.Form>
  );
};

export default LoginForm;
