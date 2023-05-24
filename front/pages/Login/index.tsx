import LoginForm from '@components/LoginForm';
import React from 'react';
import * as S from './styles';

const Login = () => {
  return (
    <div id="container">
      <S.Header>Sleact</S.Header>
      <LoginForm />
      <S.LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <a href="/signup">회원가입 하러가기</a>
      </S.LinkContainer>
    </div>
  );
};

export default Login;
