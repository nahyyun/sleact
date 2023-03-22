import Button from '@components/common/Button';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import * as S from './style';
import { Outlet } from 'react-router-dom';
import Header from '@layouts/Header';
import Workspaces from '@components/Workspaces';
import Channel from '@components/Channel';

const Workspace = () => {
  const { logout } = useAuth();

  return (
    <div>
      <Header />
      <S.WorkspaceWrapper>
        <Workspaces />
        <Channel />
        <S.Chats>chats</S.Chats>
      </S.WorkspaceWrapper>

      <Button onClick={logout}>로그아웃</Button>
      <Outlet />
    </div>
  );
};

export default Workspace;
