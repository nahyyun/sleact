import useAuth from '@hooks/useAuth';
import React from 'react';
import * as S from './style';
import Menu from '@components/Menu';
import useMenu from '@hooks/useMenu';
import ProfileInfo from '@components/common/ProfileInfo';

const Header = () => {
  const {
    logout,
    user: { isLoading, userInfo },
  } = useAuth();
  const { isOpen, openMenu: openUserProfileMenu, closeMenu: closeUserProfileMenu } = useMenu();

  return (
    <S.Header>
      <S.RightMenu onClick={openUserProfileMenu}>
        <ProfileInfo userInfo={userInfo} />
      </S.RightMenu>
      <Menu isOpen={isOpen} onCloseMenu={closeUserProfileMenu}>
        <S.ProfileMenu>
          <ProfileInfo userInfo={userInfo}>
            <div>
              <span>test</span>
              <span id="profile-name">{userInfo!.nickname}</span>
              <span id="profile-active">Active</span>
            </div>
          </ProfileInfo>
        </S.ProfileMenu>
        <S.LogOutButton onClick={logout}>로그아웃</S.LogOutButton>
      </Menu>
    </S.Header>
  );
};

export default Header;
