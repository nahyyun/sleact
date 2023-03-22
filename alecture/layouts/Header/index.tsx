import useAuth from '@hooks/useAuth';
import React from 'react';
import gravatar from 'gravatar';
import * as S from './style';
import Menu from '@components/Menu';
import useMenu from '@hooks/useMenu';

const Header = () => {
  const { logout, user } = useAuth();
  const { isOpen, openMenu: openUserProfileMenu, closeMenu: closeUserProfileMenu } = useMenu();

  const profileImgUrl = gravatar.url(user!.email, { s: '20px', d: 'retro' });

  return (
    <S.Header>
      <S.RightMenu onClick={openUserProfileMenu}>
        <S.ProfileImg src={profileImgUrl} alt={user!.nickname} />
        <Menu isOpen={isOpen} onCloseMenu={closeUserProfileMenu}>
          <S.ProfileMenu>
            <img src={profileImgUrl} alt={user!.nickname} />
            <div>
              <span id="profile-name">{user!.nickname}</span>
              <span id="profile-active">Active</span>
            </div>
          </S.ProfileMenu>
          <S.LogOutButton onClick={logout}>로그아웃</S.LogOutButton>
        </Menu>
      </S.RightMenu>
    </S.Header>
  );
};

export default Header;
