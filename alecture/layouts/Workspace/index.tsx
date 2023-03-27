import Button from '@components/common/Button';
import React from 'react';
import useAuth from '@hooks/useAuth';
import * as S from './style';
import { Outlet, useParams } from 'react-router-dom';
import Header from '@layouts/Header';
import Workspaces from '@components/Workspaces';
import ChannelWrapper from '@components/ChannelWrapper';

const Workspace = () => {
  const {
    logout,
    user: { isLoading, userInfo },
    isLogin,
  } = useAuth();
  const { workspace } = useParams();

  const match = userInfo?.Workspaces.find((ws) => ws.name === workspace);

  return (
    <S.WorkspaceContainer>
      <Header />
      <S.WorkspaceSidebarWrapper>
        <Workspaces />
        {match && <ChannelWrapper />}
        <S.Chats>chats</S.Chats>
      </S.WorkspaceSidebarWrapper>

      <Button onClick={logout}>로그아웃</Button>
      {match && <Outlet />}
    </S.WorkspaceContainer>
  );
};

export default Workspace;
