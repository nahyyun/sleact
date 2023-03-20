import Button from '@components/Button';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import gravatar from 'gravatar';
import * as S from './style';
import { Outlet } from 'react-router-dom';

const Workspace = () => {
  const { logout, user } = useAuth();

  const onLogout = () => {
    logout();
  };

  const profileImgUrl = gravatar.url(user.email, { s: '20px', d: 'retro' });

  return (
    <div>
      <S.Header>
        <S.RightMenu>
          <span>
            <S.ProfileImg src={profileImgUrl} alt={user.email} />
          </span>
        </S.RightMenu>
      </S.Header>
      <S.WorkspaceWrapper>
        <S.Workspaces>test</S.Workspaces>
        <S.Channels>
          <S.WorkspaceName>Sleact</S.WorkspaceName>
          <S.MenuScroll>menu scroll</S.MenuScroll>
        </S.Channels>
        <S.Chats>chats</S.Chats>
      </S.WorkspaceWrapper>
      <Button onClick={onLogout}>로그아웃</Button>
      <Outlet />
    </div>
  );
};

export default Workspace;
