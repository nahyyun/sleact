import React from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';

const socketClient = (workspace: string) => {
  const URL = process.env.NODE_ENV === 'production' ? '' : `http://localhost:3095/ws-${workspace}`;

  const socket = io(URL, { transports: ['websocket'] });

  return socket;
};

export default socketClient;
