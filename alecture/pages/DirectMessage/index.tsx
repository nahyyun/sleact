import React from 'react';
import ProfileInfo from '@components/common/ProfileInfo';
import useAuth from '@hooks/useAuth';
import useFetch from '@hooks/useFetch';
import { useParams } from 'react-router';
import { IUser } from '../../types';
import ChatList from '@components/ChatList';
import ChatBox from '@components/ChatBox';
import * as S from './style';

const DirectMessage = () => {
  const { workspace, id } = useParams();
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
      <ChatList />
      <ChatBox memberList={memberList} />
    </>
  );
};

export default DirectMessage;
