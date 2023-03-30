import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';

const useSocket = () => {
  const { workspace } = useParams<{ workspace: string }>() as { workspace: string };

  const URL = process.env.NODE_ENV === 'production' ? '' : `http://localhost:3095/ws-${workspace}`;

  const socket = io(URL, { transports: ['websocket'] });

  const loginSocket = (id: number, channels: number[]) => {
    socket.emit('login', { id, channels });
  };

  const getOnlineListSocket = (listener: (memberList: number[]) => void) => {
    socket.on('onlineList', (memberList) => listener(memberList));
  };

  const disconnect = () => {
    socket.disconnect();
  };

  useEffect(() => {
    socket.on('connect', () => console.log('connected'));

    return () => {
      socket.off('connect', () => console.log('connect listener remove'));
    };
  }, []);

  return { socket, loginSocket, getOnlineListSocket, disconnect };
};

export default useSocket;
