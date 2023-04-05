import useFetch from '@hooks/useFetch';
import React from 'react';
import * as S from './style';
import { useParams } from 'react-router';
import Chat from '@components/Chat';

type ChatDataType = {
  id: number;
  content: string;
  createdAt: Date;
};

const ChatList = <T extends ChatDataType>({ chatList }: { chatList: T[] }) => {
  return (
    <S.ChatListContainer>
      {chatList?.map((chat) => (
        <Chat key={chat.id} content={chat.content}></Chat>
      ))}
    </S.ChatListContainer>
  );
};

export default ChatList;
