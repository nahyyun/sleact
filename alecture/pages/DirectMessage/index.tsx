import React from 'react';
import ProfileInfo from '@components/common/ProfileInfo';
import useAuth from '@hooks/useAuth';
import useFetch from '@hooks/useFetch';
import { useParams } from 'react-router';
import { IDM, IUser } from '../../types';
import ChatList from '@components/ChatList';
import ChatBox from '@components/ChatBox';
import * as S from './style';

const DirectMessage = () => {
  const { workspace, id } = useParams();
  const { responseData: chatList, fetch: fetchChatList } = useFetch<IDM[]>(`/workspaces/${workspace}/dms/${id}/chats`, {
    perPage: 5,
    page: 10,
  });
  const { responseData: memberList } = useFetch<IUser[]>(`/workspaces/${workspace}/members`);
  const { responseData: memberInfo } = useFetch<IUser>(`/workspaces/${workspace}/users/${id}`);
  const {
    user: { userInfo },
  } = useAuth();

  return (
    <>
      <S.Header>
        <ProfileInfo userInfo={userInfo}>
          <span>{userInfo?.nickname}</span>
        </ProfileInfo>
      </S.Header>
      <S.ContentsContainer>
        <ChatList />
        <ChatBox fetchChatList={fetchChatList} memberList={memberList} />
      </S.ContentsContainer>
    </>
  );
};

export default DirectMessage;
