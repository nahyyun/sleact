import Button from '@components/common/Button';
import React from 'react';
import useAuth from '@hooks/useAuth';
import * as S from './style';
import { Outlet, useParams } from 'react-router-dom';
import Header from '@layouts/Header';
import Workspaces from '@components/Workspaces';
import ChannelWrapper from '@components/ChannelWrapper';
import DMList from '@components/DMList';

const Workspace = () => {
  const {
    logout,
    user: { isLoading, userInfo },
    isLogin,
  } = useAuth();

  const { workspace } = useParams<{ workspace: string }>() as { workspace: string };

  const match = userInfo?.Workspaces.find((ws) => ws.name === workspace);

  return (
    <S.WorkspaceContainer>
      <Header />
      <S.WorkspaceSidebarWrapper>
        <Workspaces />
        {match && (
          <S.ChannelAndDMWrapper>
            <ChannelWrapper />
            <DMList userInfo={userInfo} workspace={workspace} />
          </S.ChannelAndDMWrapper>
        )}
        <S.Chats>chats</S.Chats>
      </S.WorkspaceSidebarWrapper>

      <Button onClick={logout}>로그아웃</Button>
      {match && <Outlet />}
    </S.WorkspaceContainer>
  );
};

export default Workspace;
