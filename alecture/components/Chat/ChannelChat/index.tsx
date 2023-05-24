import React from 'react';
import Chat from '@components/Chat';
import { IChat } from '../../../types';

const ChannelChat = ({ chatItem }: { chatItem: IChat }) => {
  return <Chat userInfo={chatItem.User} chatItem={chatItem} />;
};

export default ChannelChat;
