import React from 'react';
import InputWithLabel from '@components/common/InputWithLabel';
import Button from '@components/common/Button';
import { ISignUpForm } from '../../types';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import RegisterOptions from '@utils/registerOptions';
import * as S from './style';

const SignUpForm = () => {
  const { signUp } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignUpForm>({
    mode: 'onChange',
    defaultValues: { email: '', nickname: '', password: '', passwordCheck: '' },
  });

  const onSubmit = handleSubmit(({ passwordCheck, ...formData }) => {
    signUp(formData);
  });

  const emailRegister = register('email', RegisterOptions.signUp.email);
  const nicknameRegister = register('nickname', RegisterOptions.signUp.nickname);
  const passwordRegister = register('password', RegisterOptions.signUp.password);
  const passwordCheckRegister = register('passwordCheck', {
    ...RegisterOptions.signUp.passwordCheck,
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

      <Button type="submit">회원가입</Button>
    </S.Form>
  );
};

export default SignUpForm;
