import React from 'react';
import InviteChannelModal from '@components/ChannelWrapper/InviteChannelModal';
import Button from '@components/common/Button';
import ChatList from '@components/ChatList';
import ChatBox from '@components/ChatBox';
import useModal from '@hooks/useModal';
import { useParams } from 'react-router';
import useFetch from '@hooks/useFetch';
import { IUser, IChat } from '../../types';
import * as S from './style';
import useChat from '@components/ChatBox/hook/useChat';

const Channel = () => {
  const { workspace, channel } = useParams();

  const { responseData: chatList, fetch: fetchChatList } = useFetch<IChat[]>(
    `/workspaces/${workspace}/channels/${channel}/chats`,
    {
      perPage: 5,
      page: 10,
    },
  );
  const { responseData: memberList } = useFetch<IUser[]>(`/workspaces/${workspace}/members`);

  const { sendChannelChat } = useChat();

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <S.Header>
        <span># {channel}</span>
        <Button type="button" onClick={openModal}>
          invite
        </Button>
      </S.Header>
      <S.ContentsContainer>
        <ChatList chatList={chatList} />
        <ChatBox fetchChatList={fetchChatList} memberList={memberList} submitCallback={sendChannelChat} />
      </S.ContentsContainer>
      <InviteChannelModal isOpen={isOpen} onCloseModal={closeModal} />
    </>
  );
};

export default Channel;
