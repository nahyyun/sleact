import React from 'react';
import gravatar from 'gravatar';
import { IUser } from 'types';
import * as S from './style';

interface ProfileInfoProps {
  focus?: boolean;
  userInfo: IUser | null;
  children?: React.ReactNode;
}

const ProfileInfo = ({ focus, userInfo, children }: ProfileInfoProps) => {
  if (!userInfo) return null;

  const profileImgUrl = gravatar.url(userInfo.email, { s: '20px', d: 'retro' });

  return (
    <S.ProfileContainer focus={focus}>
      <S.ProfileImage src={profileImgUrl} alt={userInfo.nickname} />
      {children}
    </S.ProfileContainer>
  );
};

export default ProfileInfo;
