import React from 'react';
import { IDM, SuccessResponse } from '../../../types';
import axiosInstance from '../../../apis';
import { useParams } from 'react-router-dom';

const useChat = () => {
  const { workspace, id } = useParams();

  const chat = (content: string) => {
    try {
      return axiosInstance.post<SuccessResponse>(`/workspaces/${workspace}/dms/${id}/chats`, { content });
    } catch (error) {
      console.dir(error);
    }
  };
  return { chat };
};

export default useChat;
