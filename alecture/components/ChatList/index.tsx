import React from 'react';
import * as S from './style';
import Chat from '@components/Chat';

interface ChatListProps<T> {
  chatList: T[];
  render: (chatItem: T) => React.ReactNode;
}

const ChatList = <T,>({ chatList, render }: ChatListProps<T>) => {
  return <S.ChatListContainer>{chatList?.map((chat) => render(chat))}</S.ChatListContainer>;
};

export default ChatList;
