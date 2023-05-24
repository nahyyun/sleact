import ProfileInfo from '@components/common/ProfileInfo';
import React from 'react';
import { IUser, IDM, IChat } from '../../types';
import * as S from './style';

interface ChatProps {
  userInfo: IUser;
  chatItem: IChat | IDM;
}

const Chat = ({ userInfo, chatItem }: ChatProps) => {
  const createdAt = new Date(chatItem.createdAt);

  return (
    <S.ChatItemWrapper>
      <ProfileInfo userInfo={userInfo} />
      <div>
        <span>{userInfo.nickname}</span>
        <span>
          {createdAt.getHours()} : {createdAt.getMinutes()}
        </span>
      </div>
      <div>
        <span>{chatItem.content}</span>
      </div>
    </S.ChatItemWrapper>
  );
};

export default Chat;
