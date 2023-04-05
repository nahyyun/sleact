import ProfileInfo from '@components/common/ProfileInfo';
import React from 'react';

const Chat = ({ content }: { content: string }) => {
  return (
    // <ProfileInfo userInfo={}>
    <div>{content}</div>
    // </ProfileInfo>
  );
};

export default Chat;
