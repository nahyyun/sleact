import SignUpForm from '@components/SignUpForm';
import React from 'react';
import * as S from './style';

const SignUp = () => {
  return (
    <div id="container">
      <S.Header>Sleact</S.Header>
      <SignUpForm />
      <S.LinkContainer>
        이미 회원이신가요?&nbsp;
        <a href="/login">로그인 하러가기</a>
      </S.LinkContainer>
    </div>
  );
};

export default SignUp;
