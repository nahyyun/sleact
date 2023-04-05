import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import socket from '../socket';

const useSocket = () => {
  const { workspace } = useParams<{ workspace: string }>() as { workspace: string };

  const socketRef = useRef(socket(workspace));

  const [isConnected, setIsConnected] = useState(socketRef.current.connected);

  const onConnect = () => {
    setIsConnected(true);
  };

  const loginSocket = (id: number, channels: number[]) => {
    socketRef.current.emit('login', { id, channels });
  };

  const getOnlineListSocket = (listener: (memberList: number[]) => void) => {
    socketRef.current.on('onlineList', (memberList) => {
      console.log('로그인되어 있는 멤버들', memberList);
      listener(memberList);
    });
  };

  const emitChannelChatSocket = () => {
    socketRef.current.on('message', (chatData) => {
      console.log(chatData);
    });
  };

  const disconnect = () => {
    socketRef.current.disconnect();
    setIsConnected(false);
  };

  useEffect(() => {
    socketRef.current.on('connect', onConnect);

    return () => {
      socketRef.current.off('connect');
      disconnect();
    };
  }, []);

  return {
    socket: socketRef.current,
    isConnected,
    loginSocket,
    getOnlineListSocket,
    emitChannelChatSocket,
    disconnect,
  };
};

export default useSocket;
