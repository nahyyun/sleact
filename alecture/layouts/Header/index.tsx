import useAuth from '@hooks/useAuth';
import React, { useState } from 'react';
import gravatar from 'gravatar';
import * as S from './style';
import Menu from '@components/Menu';

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { logout, user } = useAuth();

  const profileImgUrl = gravatar.url(user!.email, { s: '20px', d: 'retro' });

  const onClickUserProfile = () => {
    setShowProfileMenu((prev) => {
      console.log(prev);
      return !prev;
    });
  };

  return (
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
  );
};

export default Header;
