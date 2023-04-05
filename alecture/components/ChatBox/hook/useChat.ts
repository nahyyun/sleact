import React from 'react';
import { IDM, SuccessResponse } from '../../../types';
import axiosInstance from '../../../apis';
import { useParams } from 'react-router-dom';

const useChat = () => {
  const { workspace, channel, id } = useParams();

  const sendChannelChat = (content: string) => {
    try {
      return axiosInstance.post<SuccessResponse>(`/workspaces/${workspace}/channels/${channel}/chats`, { content });
    } catch (error) {
      console.dir(error);
    }
  };

  const sendDmChat = (content: string) => {
    try {
      return axiosInstance.post<SuccessResponse>(`/workspaces/${workspace}/dms/${id}/chats`, { content });
    } catch (error) {
      console.dir(error);
    }
  };

  return { sendDmChat, sendChannelChat };
};

export default useChat;
