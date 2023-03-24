import Button from '@components/common/Button';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import * as S from './style';
import { Outlet, useParams } from 'react-router-dom';
import Header from '@layouts/Header';
import Workspaces from '@components/Workspaces';
import Channel from '@components/Channel';

const Workspace = () => {
  const {
    logout,
    user: { isLoading, userInfo },
    isLogin,
  } = useAuth();
  const { workspace } = useParams();

  const match = userInfo?.Workspaces.find((ws) => ws.name === workspace);
  console.log(isLogin);
  return (
    <div>
      <Header />
      <S.WorkspaceWrapper>
        <Workspaces />
        {match && <Channel />}
        <S.Chats>chats</S.Chats>
      </S.WorkspaceWrapper>

      <Button onClick={logout}>로그아웃</Button>
      {match && <Outlet />}
    </div>
  );
};

export default Workspace;
