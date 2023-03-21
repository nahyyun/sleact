import Button from '@components/common/Button';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import gravatar from 'gravatar';
import * as S from './style';
import { Outlet } from 'react-router-dom';
import Menu from '@components/Menu';

const Workspace = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { logout, user } = useAuth();

  const onLogout = () => {
    logout();
  };

  const profileImgUrl = gravatar.url(user!.email, { s: '20px', d: 'retro' });
  const onClickUserProfile = () => {
    setShowProfileMenu((prev) => {
      console.log(prev);
      return !prev;
    });
  };

  return (
    <div>
      <S.Header>
        <S.RightMenu>
          <span onClick={onClickUserProfile}>
            <S.ProfileImg src={profileImgUrl} alt={user!.nickname} />
            {showProfileMenu && (
              <Menu isShow={showProfileMenu} onCloseMenu={onClickUserProfile}>
                <S.ProfileModal>
                  <img src={profileImgUrl} alt={user!.nickname} />
                  <div>
                    <span id="profile-name">{user!.nickname}</span>
                    <span id="profile-active">Active</span>
                  </div>
                </S.ProfileModal>
                <S.LogOutButton onClick={logout}>로그아웃</S.LogOutButton>
              </Menu>
            )}
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
